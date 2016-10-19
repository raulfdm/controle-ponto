import PontosView from '../views/PontosView';
import ModalDeleteView from '../views/ModalDeleteView';
import NavView from '../views/NavView';
import ListaPonto from '../models/ListaPonto';
import Mensagem from '../models/Mensagem';
import RegistroPonto from '../models/RegistroPonto'
import Ponto from '../models/Ponto';
import PontoService from '../services/PontoService';
import DateHelper from '../helpers/DateHelper';
import HoraHelper from '../helpers/HoraHelper';
import MaskHelper from '../helpers/MaskHelper';
import PontoHelper from '../helpers/PontoHelper';
import Bind from '../helpers/Bind';

class PontoController {

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        let self = this;
        //Formulário
        this._data_registro = $('#data_registro');
        this._hora_registro = $('#hora_registro');

        //Views
        this._listaPontos = new Bind(new ListaPonto(), new PontosView($('#pontosView'), self), 'adiciona', 'esvazia');
        this._modalDelete = new Bind($('#modalDeleteView'), new ModalDeleteView($('#modalDeleteView')));
        this._navView = new Bind($('#navView'), new NavView($('#navView')));

        //Models
        this._mensagem = new Mensagem();

        //Services
        this._pontoService = new PontoService();

        //Ponto
        /*        var a = new Ponto();
                console.log(a);
                console.log(a._banco());*/

    }

    /************************Métodos Privados************************/

    _atualizaGrid() {
        this._listaPontos.esvazia(this._listaPontos);
        this.importaPontos(null, true);
    }

    _limpaForm() {
        this._hora_registro.value = '';
        this._hora_registro.focus();

        //reinicia os inputs (materializecss)
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
    }

    /************************Métodos Públicos************************/
    adicionaPonto(event) {
        event.preventDefault();

        let data = new Date(moment(this._data_registro.value + this._hora_registro.value, 'DD-MM-YYYYHH:mm'));
        let idUsuario = firebase.auth().currentUser.uid;

        let registro = new RegistroPonto(
            new Date(moment(this._data_registro.value + this._hora_registro.value, 'DD-MM-YYYYHH:mm')),
            idUsuario
        );

        //Evitando Callback Hell
        Promise.all([
                this._pontoService.salvarRegistro(registro)
            ]).then(mensagem => {
                this._listaPontos.adiciona(registro);
                this._limpaForm();
                this._atualizaGrid();
                this._mensagem.toast = "Ponto adicionado com sucesso";
            })
            .catch(error => {
                console.log(error);    
                return this._mensagem.toast = error
            });

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
                .then(pontos => {
                    //O filter vai avaliar os elementos que retornarão para a 
                    //inserção dos pontos na lista                    

                    return PontoHelper.groupBy(pontos, (y) => moment(y._dataRegistro).format('YYYY-MM-DD'));

                    /*return pontos.filter(ponto =>
                        //Itera item a item da lista de pontos
                        //Se o ponto da lista de pontos for igual ao ponto
                        //que foi obtido pelo service, ele não retorna, ou seja,
                        //Ele não será inserido novamente
                        console.log()
                        !this._listaPontos.pontos.some(pontoEx =>
                            //Maneira de validar objetos
                            JSON.stringify(pontoEx) == JSON.stringify(ponto)
                        ))*/
                })

            ]).then(pontos => {                
                this._listaPontos.adiciona(new Array(pontos[0]));
                
                //console.log(a);
                //return

                //Se a lista de pontos for diferente de 0, importa e da sucesso    
                /*if (pontos[0].length != 0) {
                    pontos.reduce((retorno, item) => retorno.concat(item), [])
                        .forEach(ponto => this._listaPontos.adiciona(ponto));
                    if (!funcionalidade) this._mensagem.toast = "Dados importados com sucesso";

                } else {
                    if (!funcionalidade) this._mensagem.toast = "Não há novos dados para importar";
                }*/

            })
            .catch(error => {
                console.log(error);
            return this._mensagem.toast = error
            });
    }

    excluiPonto(idPonto) {

        let objecto = this._listaPontos._pontos.filter(function(ponto) {
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