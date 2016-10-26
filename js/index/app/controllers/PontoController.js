'use strict';

System.register(['../views/PontosView', '../views/ModalRegistraPontoView', '../views/AdicionaRegistroView', '../views/BuscaPontosView', '../views/LoaderView', '../views/NavView', '../views/SomaHorasView', '../models/ListaPonto', '../models/Mensagem', '../models/RegistroPonto', '../models/Ponto', '../services/PontoService', '../helpers/HoraHelper', '../helpers/MaskHelper', '../helpers/PontoHelper', '../helpers/Bind'], function (_export, _context) {
    "use strict";

    var PontosView, ModalRegistraPontoView, AdicionaRegistroView, BuscaPontosView, LoaderView, NavView, SomaHorasView, ListaPonto, Mensagem, RegistroPonto, Ponto, PontoService, HoraHelper, MaskHelper, PontoHelper, Bind, _createClass, PontoController, pontoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    //Usando "singleton"
    function currentInstance() {
        return pontoController;
    }

    _export('currentInstance', currentInstance);

    return {
        setters: [function (_viewsPontosView) {
            PontosView = _viewsPontosView.default;
        }, function (_viewsModalRegistraPontoView) {
            ModalRegistraPontoView = _viewsModalRegistraPontoView.default;
        }, function (_viewsAdicionaRegistroView) {
            AdicionaRegistroView = _viewsAdicionaRegistroView.default;
        }, function (_viewsBuscaPontosView) {
            BuscaPontosView = _viewsBuscaPontosView.default;
        }, function (_viewsLoaderView) {
            LoaderView = _viewsLoaderView.default;
        }, function (_viewsNavView) {
            NavView = _viewsNavView.default;
        }, function (_viewsSomaHorasView) {
            SomaHorasView = _viewsSomaHorasView.default;
        }, function (_modelsListaPonto) {
            ListaPonto = _modelsListaPonto.default;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.default;
        }, function (_modelsRegistroPonto) {
            RegistroPonto = _modelsRegistroPonto.default;
        }, function (_modelsPonto) {
            Ponto = _modelsPonto.default;
        }, function (_servicesPontoService) {
            PontoService = _servicesPontoService.default;
        }, function (_helpersHoraHelper) {
            HoraHelper = _helpersHoraHelper.default;
        }, function (_helpersMaskHelper) {
            MaskHelper = _helpersMaskHelper.default;
        }, function (_helpersPontoHelper) {
            PontoHelper = _helpersPontoHelper.default;
        }, function (_helpersBind) {
            Bind = _helpersBind.default;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            PontoController = function () {
                function PontoController() {
                    _classCallCheck(this, PontoController);

                    //o Bind associa o contexto do Document ao comportamento querySelector ($);
                    var $ = document.querySelector.bind(document);
                    var self = this;
                    //Formulários
                    ////Registro de Ponto                    
                    this._data_registro;
                    this._hora_registro;
                    this._id_registroElement;
                    ////Busca de Pontos
                    this._mes_filtro;
                    this._ano_filtro;

                    //Views
                    this._somaHoraView = new Bind($('#somaHorasView'), new SomaHorasView($('#somaHorasView')));
                    this._modalRegistro = new Bind($('#modalRegistraPontoView'), new ModalRegistraPontoView($('#modalRegistraPontoView'), self));
                    this._buscaPontosComponenet = new Bind($('#buscaPontosView'), new BuscaPontosView($('#buscaPontosView')));
                    this._adicionaRegistro = new Bind($('#adicionaRegistroView'), new AdicionaRegistroView($('#adicionaRegistroView')));
                    this._navView = new Bind($('#navView'), new NavView($('#navView')));
                    this._loaderView = new Bind($('#loaderView'), new LoaderView($('#loaderView')));
                    this._loader = $('.loader');
                    this._listaPontos = new Bind(new ListaPonto(), new PontosView($('#pontosView'), self), 'adiciona', 'esvazia');
                    //Models
                    this._mensagem = new Mensagem();

                    //Services
                    this._pontoService = new PontoService();
                }

                /************************Métodos Privados************************/


                _createClass(PontoController, [{
                    key: '_carregaPontosDoMes',
                    value: function _carregaPontosDoMes() {
                        var hoje = new Date();

                        this._mes_filtro = hoje.getMonth();
                        this._ano_filtro = hoje.getFullYear();

                        this._atualizaGrid();
                    }
                }, {
                    key: '_atualizaGrid',
                    value: function _atualizaGrid(data) {
                        this._listaPontos.esvazia(this._listaPontos);
                        this.importaPontos(null, data);
                    }
                }, {
                    key: '_loaderAtivo',
                    value: function _loaderAtivo(ativo) {
                        if (!ativo) {
                            this._loader.style.display = 'none';
                        } else {
                            this._loader.style.display = 'block';
                        }
                    }
                }, {
                    key: '_adicionaPonto',
                    value: function _adicionaPonto(event) {
                        var _this = this;

                        event.preventDefault();

                        var data = new Date(moment(this._data_registro.value + this._hora_registro.value, 'DD-MM-YYYYHH:mm'));

                        var registro = new RegistroPonto(data);

                        //Evitando Callback Hell
                        Promise.all([this._pontoService.salvarRegistro(registro)]).then(function (mensagem) {
                            _this.limpaForm();
                            _this._atualizaGrid(data);
                            _this._mensagem.toast = "Ponto adicionado com sucesso!";
                        }).catch(function (error) {
                            console.error(error);
                            _this._mensagem.toast = "Erro na adição do ponto. Por favor, verifique o console";
                        });
                    }
                }, {
                    key: '_alteraPonto',
                    value: function _alteraPonto(event) {
                        var _this2 = this;

                        var data = new Date(moment(this._data_registro.value + this._hora_registro.value, 'DD-MM-YYYYHH:mm'));
                        var registro = new RegistroPonto(data, this._idRegistroPonto);
                        Promise.all([this._pontoService.alterarPonto(registro)]).then(function (callback) {
                            _this2.limpaForm();
                            _this2._atualizaGrid();
                            $('#modal-registro').closeModal();
                            _this2._mensagem.toast = "Ponto alterado com sucesso!";
                        }).catch(function (error) {
                            console.error(error);
                            _this2._mensagem.toast = "Erro na alteração do registro.Por favor, verifique o console";
                        });
                    }
                }, {
                    key: '_getElementosFormularioPonto',
                    value: function _getElementosFormularioPonto() {
                        this._id_registroElement = document.querySelector('.form-cadastro-ponto');
                        this._data_registro = document.querySelector('#data_registro');
                        this._hora_registro = document.querySelector('#hora_registro');
                    }
                }, {
                    key: 'limpaForm',
                    value: function limpaForm() {
                        this._getElementosFormularioPonto();
                        this._idRegistroPonto = '';
                        this._hora_registro.value = '';
                        this._hora_registro.focus();
                    }
                }, {
                    key: 'salvaPonto',
                    value: function salvaPonto(event) {
                        this._getElementosFormularioPonto();

                        if (!this._idRegistroPonto) {
                            this._adicionaPonto(event);
                        } else {
                            this._alteraPonto(event);
                        }
                    }
                }, {
                    key: 'limpaGrid',
                    value: function limpaGrid() {
                        return this._listaPontos.esvazia(this._listaPontos);
                    }
                }, {
                    key: 'importaPontos',
                    value: function importaPontos(event) {
                        var _this3 = this;

                        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


                        if (event) {
                            this._mes_filtro = document.querySelector('.mes-filtro').value;
                            this._ano_filtro = document.querySelector('.ano-filtro').value;
                        }
                        if (data) {
                            var dataDate = new Date(data);
                            this._mes_filtro = dataDate.getMonth();
                            this._ano_filtro = dataDate.getFullYear();
                        }

                        if (this._mes_filtro && this._ano_filtro) {
                            //ativa o loader
                            this._loaderAtivo(true);
                            if (event) event.preventDefault();

                            var mesAno = {
                                mes: this._mes_filtro,
                                ano: this._ano_filtro
                            };

                            //Evitando Callback Hell
                            Promise.all([this._pontoService.obterPontos(mesAno)
                            //Pega o retorno dos pontos para tratar antes
                            .then(function (pontos) {
                                return PontoHelper.groupBy(pontos, function (y) {
                                    return moment(y._data_registro).format('YYYY-MM-DD');
                                });
                            })]).then(function (pontos) {
                                _this3._listaPontos.adiciona(pontos[0]);
                                _this3._loaderAtivo(false);
                                if (event) _this3._mensagem.toast = "Dados importados com sucesso";
                            }).catch(function (error) {
                                if (error = "0001") {
                                    _this3.limpaGrid();
                                    _this3._loaderAtivo(false);
                                    _this3._mensagem.toast = "Não há pontos cadastrados para esse período";
                                } else {
                                    console.log(error);
                                    _this3._mensagem.toast = error;
                                }
                            });
                        }
                    }
                }, {
                    key: 'excluirPonto',
                    value: function excluirPonto(idRegistro) {
                        var _this4 = this;

                        Promise.all([this._pontoService.apagarPonto(idRegistro)]).then(function (retorno) {
                            console.log(retorno);
                            _this4._atualizaGrid();
                            _this4._mensagem.toast = "Ponto excluído com sucesso!";
                        }).catch(function (err) {
                            return console.log(err);
                        });
                    }
                }, {
                    key: '_idRegistroPonto',
                    get: function get() {
                        return this._id_registroElement.attributes.getNamedItem("id-registro").value;
                    },
                    set: function set(value) {
                        this._id_registroElement.attributes.getNamedItem("id-registro").value = value;
                    }
                }]);

                return PontoController;
            }();

            ;

            pontoController = new PontoController();
        }
    };
});
//# sourceMappingURL=PontoController.js.map
