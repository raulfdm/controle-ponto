import PontosView from '../views/PontosView';
import ModalDeleteView from '../views/ModalDeleteView';
import NavView from '../views/NavView';
import ListaPonto from '../models/ListaPonto';
import Mensagem from '../models/Mensagem';
import Ponto from '../models/Ponto';
import PontoService from '../services/PontoService';
import DateHelper from '../helpers/DateHelper';
import HoraHelper from '../helpers/HoraHelper';
import MaskHelper from '../helpers/MaskHelper';
import Bind from '../helpers/Bind';

class PontoController {

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        let self = this;
        //Elementos do Switch
        this._horaFormat = $('#horaFormat');
        this._hora12 = $('#hora12');
        this._hora24 = $('#hora24');
        //Formulário
        this._data_cadastro = $('#data_cadastro');
        this._horasDiarias = $('#horaTrabalhada');
        this._hora1 = $('#hora1');
        this._hora2 = $('#hora2');
        this._hora3 = $('#hora3');
        this._hora4 = $('#hora4');
        this._hora5 = $('#hora5');
        this._hora6 = $('#hora6');

        this._camposHora = document.querySelectorAll('.input-hora');
        this._listaPontos = new Bind(new ListaPonto(), new PontosView($('#pontosView'), this._horasDiarias.value, self), 'adiciona', 'esvazia');
        
        //Views
        this._modalDelete = new Bind($('#modalDeleteView'), new ModalDeleteView($('#modalDeleteView')));
        this._navView = new Bind($('#navView'), new NavView($('#navView')));

        this._mensagem = new Mensagem();

        this._pontoService = new PontoService();

        this._init(self);
    }

    /************************Métodos Privados************************/
    _init(self) {
        this._adicionaEventos(self);
    }

    _atualizaGrid() {
        this._listaPontos.esvazia(this._listaPontos);
        this.importaPontos(null, true);
    }

    _limpaForm() {
        //this._data_cadastro.value = '';
        this._hora1.value = '';
        this._hora1.focus();
        this._hora2.value = '';
        this._hora3.value = '';
        this._hora4.value = '';
        this._hora5.value = '';
        this._hora6.value = '';

        //reinicia os inputs (materializecss)
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
    }

    _adicionaEventos(self) {
        //Revisar
        /*this._horaFormat.addEventListener('change', function () {

            if (this.dataset.hora == 24) {
                this.dataset.hora = 12;
                self._hora24.classList.remove('horaAtiva');
                self._hora12.classList.add('horaAtiva');

            } else {
                this.dataset.hora = 24;
                self._hora12.classList.remove('horaAtiva');
                self._hora24.classList.add('horaAtiva');
            }
        })*/
    }

    /************************Métodos Públicos************************/
    adicionaPonto(event) {
        event.preventDefault();

        let ponto = new Ponto(
            DateHelper.dataParaTexto(new Date(this._data_cadastro.value)),
            HoraHelper.getMilissegundos(this._hora1.value),
            HoraHelper.getMilissegundos(this._hora2.value),
            HoraHelper.getMilissegundos(this._hora3.value),
            HoraHelper.getMilissegundos(this._hora4.value),
            HoraHelper.getMilissegundos(this._hora5.value),
            HoraHelper.getMilissegundos(this._hora6.value)
        );
        //Evitando Callback Hell
        Promise.all([
            this._pontoService.salvarPonto(ponto)
        ]).then(mensagem => {
            this._listaPontos.adiciona(ponto);
            this._limpaForm();
            this._atualizaGrid();
            this._mensagem.toast = "Ponto adicionado com sucesso";
        })
            .catch(error => this._mensagem.toast = error);

    }

    limpaGrid(chamada = null) {

        let msg;

        if (this._listaPontos.pontos.length == 0) {
            msg = 'Lista já está vazia'
            this._mensagem.toast = msg;
        } else {
            if (!this._listaPontos.esvazia(this._listaPontos)) {
                msg = 'Dados removidos com sucesso!';
                this._mensagem.toast = msg;
            } else {
                msg = 'Não foi possível remover os dados';
                this._mensagem.toast = msg;
                throw new Error(msg);
            }
        }
    }

    importaPontos(event, funcionalidade = false) {
        //Obs.: O parametro funcionalidade diz se a chamada está vindo de outra funcionalidade
        //Implementação feita para evitar de spamar mensagens ao atualizar o Grid.

        //Evitando Callback Hell
        Promise.all([
            this._pontoService.obterPontos()
                //Pega o retorno dos pontos para tratar antes
                .then(pontos =>
                    //O filter vai avaliar os elementos que retornarão para a 
                    //inserção dos pontos na lista
                    pontos.filter(ponto =>
                        //Itera item a item da lista de pontos
                        //Se o ponto da lista de pontos for igual ao ponto
                        //que foi obtido pelo service, ele não retorna, ou seja,
                        //Ele não será inserido novamente
                        !this._listaPontos.pontos.some(pontoEx =>
                            //Maneira de validar objetos
                            JSON.stringify(pontoEx) == JSON.stringify(ponto)
                        )))

        ]).then(pontos => {
            //Se a lista de pontos for diferente de 0, importa e da sucesso    
            if (pontos[0].length != 0) {
                pontos.reduce((retorno, item) => retorno.concat(item), [])
                    .forEach(ponto => this._listaPontos.adiciona(ponto));
                if (!funcionalidade) this._mensagem.toast = "Dados importados com sucesso";

            } else {
                if (!funcionalidade) this._mensagem.toast = "Não há novos dados para importar";
            }

        })
            .catch(error => this._mensagem.toast = error);
    }

    excluiPonto(idPonto) {

        let objecto = this._listaPontos._pontos.filter(function (ponto) {
            return ponto._id === idPonto;
        })

        Promise.all([this._pontoService.apagarPonto(objecto)])
            .then(retorno => {
                this._atualizaGrid();
                this._mensagem.toast = "Ponto excluído com sucesso!";
            }).catch(err => console.log(err));
    }

};

let pontoController = new PontoController();

//Usando "singleton"
export function currentInstance() {
    return pontoController;
}