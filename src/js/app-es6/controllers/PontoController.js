import PontosView from '../views/PontosView';
import ModalDeleteView from '../views/ModalDeleteView';
import ModalRegistraPontoView from '../views/ModalRegistraPontoView';
import AdicionaRegistroView from '../views/AdicionaRegistroView';
import BuscaPontosView from '../views/BuscaPontosView';
import LoaderView from '../views/LoaderView';
import NavView from '../views/NavView';
import ListaPonto from '../models/ListaPonto';
import Mensagem from '../models/Mensagem';
import RegistroPonto from '../models/RegistroPonto'
import Ponto from '../models/Ponto';
import PontoService from '../services/PontoService';
import HoraHelper from '../helpers/HoraHelper';
import MaskHelper from '../helpers/MaskHelper';
import PontoHelper from '../helpers/PontoHelper';
import Bind from '../helpers/Bind';

class PontoController {

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        let self = this;
        //Formulários
        ////Registro de Ponto                    
        this._data_registro;
        this._hora_registro;
        ////Busca de Pontos
        this._mes_filtro;
        this._ano_filtro;

        //Views
        this._listaPontos = new Bind(new ListaPonto(), new PontosView($('#pontosView'), self), 'adiciona', 'esvazia');
        this._modalDelete = new Bind($('#modalDeleteView'), new ModalDeleteView($('#modalDeleteView')));
        this._modalRegistro = new Bind($('#modalRegistraPontoView'), new ModalRegistraPontoView($('#modalRegistraPontoView')));
        this._buscaPontosComponenet = new Bind($('#buscaPontosView'), new BuscaPontosView($('#buscaPontosView')));
        this._adicionaRegistro = new Bind($('#adicionaRegistroView'), new AdicionaRegistroView($('#adicionaRegistroView')));
        this._navView = new Bind($('#navView'), new NavView($('#navView')));
        this._loaderView = new Bind($('#loaderView'), new LoaderView($('#loaderView')));

        this._loader = $('.loader');

        //Models
        this._mensagem = new Mensagem();

        //Services
        this._pontoService = new PontoService();

    }

    /************************Métodos Privados************************/
    _carregaPontosDoMes() {
        let hoje = new Date();

        this._mes_filtro = hoje.getMonth();
        this._ano_filtro = hoje.getFullYear();

        this._atualizaGrid();
    }
    _atualizaGrid() {
        this._listaPontos.esvazia(this._listaPontos);
        this.importaPontos(null);
    }

    _limpaForm() {
        this._hora_registro.value = '';
        this._hora_registro.focus();
    }

    _loaderAtivo(ativo) {
        if (!ativo) {
            this._loader.style.display = 'none';
        } else {
            this._loader.style.display = 'block';
        }
    }

    /************************Métodos Públicos************************/
    adicionaPonto(event) {

        event.preventDefault();

        this._data_registro = document.querySelector('#data_registro');
        this._hora_registro = document.querySelector('#hora_registro');

        let data = new Date(moment(this._data_registro.value + this._hora_registro.value, 'DD-MM-YYYYHH:mm'));

        let registro = new RegistroPonto(data);

        //Evitando Callback Hell
        Promise.all([
                this._pontoService.salvarRegistro(registro)
            ]).then(mensagem => {
                this._limpaForm();
                this._atualizaGrid();
                this._mensagem.toast = "Ponto adicionado com sucesso";
            })
            .catch(error => {
                console.log(error);
                return this._mensagem.toast = "Erro na execução. Verifique o console";
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


    importaPontos(event) {



        if (event) {
            this._mes_filtro = document.querySelector('.mes-filtro').value;
            this._ano_filtro = document.querySelector('.ano-filtro').value;
        }


        if (this._mes_filtro && this._ano_filtro) {
            //ativa o loader
            this._loaderAtivo(true);
            if (event) event.preventDefault();

            let mesAno = {
                mes: this._mes_filtro,
                ano: this._ano_filtro
            }

            //Evitando Callback Hell
            Promise.all([
                    this._pontoService.obterPontos(mesAno)
                    //Pega o retorno dos pontos para tratar antes
                    .then(pontos =>
                        PontoHelper.groupBy(pontos, y =>
                            moment(y._data_registro).format('YYYY-MM-DD')))
                ]).then(pontos => {                    
                    this._listaPontos.adiciona(pontos[0]);
                    this._loaderAtivo(false);
                    if (event) this._mensagem.toast = "Dados importados com sucesso"
                })
                .catch(error => {
                    if (error = "0001") {
                        this._loaderAtivo(false);
                        this._mensagem.toast = "Não há pontos cadastrados para esse período"
                    } else {
                        console.log(error);
                        this._mensagem.toast = error
                    }

                });
        }
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