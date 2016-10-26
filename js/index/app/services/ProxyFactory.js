'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _typeof, _createClass, ProxyFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

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

            ProxyFactory = function () {
                function ProxyFactory() {
                    _classCallCheck(this, ProxyFactory);

                    throw new Error('Classe não pode ser instanciada');
                }

                _createClass(ProxyFactory, null, [{
                    key: 'create',
                    value: function create(object, params, act) {

                        return new Proxy(object, {
                            get: function get(target, prop, receiver) {
                                /*
                                Target: o objeto encapsulado -> Lista de Pontos (ListaPont())
                                prop: propriedade do target (esvazia, adiciona, ou qualquer outra)
                                reciever: Referencia para o Proxy 
                                */

                                //Valida se são os metodos 
                                if (params.includes(prop) && ProxyFactory._validaFuncao(target[prop])) {

                                    //retorna a função interceptada
                                    return function () {
                                        //reflete a função que foi chamada
                                        var retorno = Reflect.apply(target[prop], target, arguments);
                                        //Disparada meu evento de atualização da view, agora já no target(Lista de Pontos); 
                                        act(target);

                                        return retorno;
                                    };
                                }
                                return Reflect.get(target, prop, receiver);
                            },
                            set: function set(target, prop, value, receiver) {

                                var retorno = Reflect.set(target, prop, value, receiver);
                                if (params.includes(prop)) {
                                    act(target);
                                }

                                return retorno;
                            }
                        });
                    }
                }, {
                    key: '_validaFuncao',
                    value: function _validaFuncao(funcao) {
                        return (typeof funcao === 'undefined' ? 'undefined' : _typeof(funcao)) == (typeof Function === 'undefined' ? 'undefined' : _typeof(Function));
                    }
                }]);

                return ProxyFactory;
            }();

            _export('default', ProxyFactory);
        }
    };
});
//# sourceMappingURL=ProxyFactory.js.map
