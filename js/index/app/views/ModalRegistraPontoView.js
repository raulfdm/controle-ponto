'use strict';

System.register(['./View'], function (_export, _context) {
    "use strict";

    var View, _createClass, ModalRegistraPontoView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_View2) {
            View = _View2.default;
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

            ModalRegistraPontoView = function (_View) {
                _inherits(ModalRegistraPontoView, _View);

                function ModalRegistraPontoView(elemento, contexto) {
                    _classCallCheck(this, ModalRegistraPontoView);

                    var _this = _possibleConstructorReturn(this, (ModalRegistraPontoView.__proto__ || Object.getPrototypeOf(ModalRegistraPontoView)).call(this, elemento));

                    var contentExclusao = void 0;
                    var idTarget = void 0;
                    var idRegistro = void 0;
                    var showContentConfirmacao = void 0;

                    //event bubbling        
                    elemento.addEventListener('click', function (e) {
                        contentExclusao = document.querySelector('.confirma-exclusao-content');

                        showContentConfirmacao = function showContentConfirmacao(visible) {
                            if (visible) {
                                contentExclusao.style.opacity = 1;
                                contentExclusao.style.zIndex = 2;
                            } else {
                                contentExclusao.style.opacity = 0;
                                contentExclusao.style.zIndex = -1;
                            }
                        };

                        showContentConfirmacao(false);

                        //Pega o ID do target
                        idTarget = e.target.id;
                        //Pega o ID do Registro
                        idRegistro = document.querySelector('.form-cadastro-ponto').attributes.getNamedItem("id-registro").value;
                        //Validação para saber de onde veio o click
                        if (idTarget == 'btn-excluir-nao') {
                            showContentConfirmacao(false);
                        }

                        if (idTarget == 'btn-excluir-sim') {
                            showContentConfirmacao(false);
                            contexto.excluirPonto(idRegistro);
                            $('#modal-registro').closeModal();
                        }

                        if (idTarget == 'btn-deleta-ponto' || e.target.textContent == 'delete') {
                            if (idRegistro) {
                                showContentConfirmacao(true);
                            }
                        }

                        //método para abstrair a visualização do elemento
                    });

                    return _this;
                }

                _createClass(ModalRegistraPontoView, [{
                    key: 'template',
                    value: function template(model) {
                        return '\n        <div id="modal-registro" class="modal modal-fixed-footer">\n            <h5 class="center-align">Registro de Ponto</h5>\n            <div class="modal-container">\n                <form action="#" class="modal-content form-cadastro-ponto" id-registro="">\n                    <div class="input-field">\n                        <label for="">Data</label>\n                        <input id="data_registro" name="data_registro" type="text" placeholder="30/12/1900" readonly required>\n                    </div>\n                    <div class="input-field">\n                        <label for="hora_registro">Hor\xE1rio</label>\n                        <input oninvalid="this.setCustomValidity(\'Por favor, digitar um valor v\xE1lido\')" class="input-hora" id="hora_registro" name="hora_registro" type="text" placeholder="08:00" pattern="[0-2]\\d:[0-5]\\d" required>                        \n                    </div>\n                    <input type="submit" id="salva-registro" style="display: none"></input>\n                </form>\n                <div class="salva-deleta modal-footer">\n                    <button id="btn-deleta-ponto"><i class="material-icons center">delete</i></button>                                        \n                    <label for="salva-registro" id="btn-registra-ponto" class="btn-small light-blue darken-4 col s12 btn waves-effect waves-light center" type="submit" name="action"><i class="material-icons center">done</i></label for="">                                                                                                \n                </div>                \n                    <div class="confirma-exclusao-content modal-footer">\n                        <p>Deseja excluir?</p>\n                        <button id="btn-excluir-nao" class="btn btn-small">N\xE3o</button>\n                        <button id="btn-excluir-sim" class="btn red lighten-2 btn-small">Sim</button>\n                    </div>                                                                                                                                                        \n            </div>\n        </div>\n        ';
                    }
                }]);

                return ModalRegistraPontoView;
            }(View);

            _export('default', ModalRegistraPontoView);
        }
    };
});
//# sourceMappingURL=ModalRegistraPontoView.js.map
