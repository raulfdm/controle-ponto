'use strict';

System.register(['../models/Ponto', '../models/RegistroPonto'], function (_export, _context) {
    "use strict";

    var Ponto, RegistroPonto, _createClass, PontoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsPonto) {
            Ponto = _modelsPonto.default;
        }, function (_modelsRegistroPonto) {
            RegistroPonto = _modelsRegistroPonto.default;
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

            PontoService = function () {
                function PontoService() {
                    _classCallCheck(this, PontoService);
                }

                _createClass(PontoService, [{
                    key: 'obterPontos',
                    value: function obterPontos(mesAno) {

                        var idUser = firebase.auth().currentUser.uid;
                        var dateRange = {
                            inicio: moment(new Date(mesAno.ano, mesAno.mes, 1)).format('YYYY-MM-DD'),
                            fim: moment(new Date(mesAno.ano, parseInt(mesAno.mes) + 1, 0)).format('YYYY-MM-DD')
                        };

                        return new Promise(function (resolve, reject) {
                            firebase.database().ref('/pontos/' + idUser + '/').orderByChild('_data_registro').startAt(dateRange.inicio).endAt(dateRange.fim).once('value').then(function (snapshot) {
                                if (!snapshot.val()) reject("0001");
                                var pontos = snapshot.val();
                                var listaPontos = [];
                                var ponto = void 0;
                                for (var idPonto in pontos) {
                                    ponto = pontos[idPonto];
                                    listaPontos.push(new RegistroPonto(ponto._data_registro, idPonto));
                                }
                                resolve(listaPontos);
                            }).catch(function (error) {
                                return reject(error);
                            });
                        });
                    }
                }, {
                    key: 'salvarRegistro',
                    value: function salvarRegistro(registro) {
                        var idUser = firebase.auth().currentUser.uid;
                        return new Promise(function (resolve, reject) {
                            firebase.database().ref('/pontos/').child(idUser).push(registro).then(function (res) {
                                resolve("Sucess");
                            }).catch(function (error) {
                                reject(error);
                            });
                        });
                    }
                }, {
                    key: 'alterarPonto',
                    value: function alterarPonto(registro) {
                        var idUser = firebase.auth().currentUser.uid;
                        return new Promise(function (resolve, reject) {
                            firebase.database().ref('/pontos/' + idUser + '/' + registro.id).update(registro).then(function (sucess) {
                                return resolve('Sucess');
                            }).catch(function (error) {
                                return reject(error);
                            });
                        });
                    }
                }, {
                    key: 'apagarPonto',
                    value: function apagarPonto(registro) {
                        var idUser = firebase.auth().currentUser.uid;

                        //console.warn(registro,idUser,'oi')
                        return new Promise(function (resolve, reject) {
                            firebase.database().ref('/pontos/' + idUser + '/' + registro).remove().then(function (sucess) {
                                return resolve('Sucess');
                            }).catch(function (error) {
                                return reject(error);
                            });
                        });
                    }
                }]);

                return PontoService;
            }();

            _export('default', PontoService);
        }
    };
});
//# sourceMappingURL=PontoService.js.map
