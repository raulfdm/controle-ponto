'use strict';

System.register(['../helpers/HoraHelper'], function (_export, _context) {
    "use strict";

    var HoraHelper, _createClass, Ponto;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_helpersHoraHelper) {
            HoraHelper = _helpersHoraHelper.default;
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

            Ponto = function () {
                function Ponto(dataPonto, registros) {
                    _classCallCheck(this, Ponto);

                    var pontoZerado = new Date(2016, 1, 1, 0, 0, 0);

                    this._dataPonto = dataPonto;
                    this._registros = registros ? registros : [];
                    //Primeiro Par
                    this._entrada1 = {
                        id: this._registros[0] ? this._registros[0].id : "",
                        hora: moment.duration(moment(this._registros[0] ? this._registros[0]._data_registro : pontoZerado).format('HH:mm'))
                    };
                    this._saida1 = {
                        id: this._registros[1] ? this._registros[1].id : "",
                        hora: moment.duration(moment(this._registros[1] ? this._registros[1]._data_registro : pontoZerado).format('HH:mm'))
                    };
                    //Segundo Par
                    this._entrada2 = {
                        id: this._registros[2] ? this._registros[2].id : "",
                        hora: moment.duration(moment(this._registros[2] ? this._registros[2]._data_registro : pontoZerado).format('HH:mm'))
                    };
                    this._saida2 = {
                        id: this._registros[3] ? this._registros[3].id : "",
                        hora: moment.duration(moment(this._registros[3] ? this._registros[3]._data_registro : pontoZerado).format('HH:mm'))
                    };
                    //Terceiro Par
                    this._entrada3 = {
                        id: this._registros[4] ? this._registros[4].id : "",
                        hora: moment.duration(moment(this._registros[4] ? this._registros[4]._data_registro : pontoZerado).format('HH:mm'))
                    };
                    this._saida3 = {
                        id: this._registros[5] ? this._registros[5].id : "",
                        hora: moment.duration(moment(this._registros[5] ? this._registros[5]._data_registro : pontoZerado).format('HH:mm'))
                    };

                    this._horasDiarias = "08:00";
                    this._tolerânciaDiaria = "00:10";

                    Object.freeze(this);
                }

                //Methods


                _createClass(Ponto, [{
                    key: '_total',
                    value: function _total() {
                        var total = new moment.duration();

                        //Diferenças pares de hora        
                        total.add(this._saida1.hora - this._entrada1.hora);
                        total.add(this._saida2.hora - this._entrada2.hora);
                        total.add(this._saida3.hora - this._entrada3.hora);

                        return total;
                    }
                }, {
                    key: '_banco',
                    value: function _banco() {

                        var total = this._total();

                        //Instaciado 2x o objeto, pois, o duration é mutável, ou seja,
                        //quando é feito a operação "add" em um duration, ele altera o valor
                        //E impacata no resultado da próxima operação (subtract)
                        var praMais = HoraHelper.getDuration(this._horasDiarias).add(HoraHelper.getDuration(this._tolerânciaDiaria));
                        var praMenos = HoraHelper.getDuration(this._horasDiarias).subtract(HoraHelper.getDuration(this._tolerânciaDiaria));

                        if (total >= praMenos && total <= praMais) {
                            return moment.duration({ hours: 0 });
                        } else {
                            return this._total().subtract(HoraHelper.getDuration(this._horasDiarias));
                        }
                    }
                }, {
                    key: 'toString',
                    value: function toString() {
                        return {
                            id_ponto: this._id,
                            id_usuario: this._idUsuario,
                            data_registro: moment(this._dataRegistro).format()
                        };
                    }
                }, {
                    key: 'entrada1',
                    set: function set(registro) {
                        this._entrada1 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._entrada1.id,
                            hora: HoraHelper.getHoraString(this._entrada1.hora)
                        });
                    }
                }, {
                    key: 'entrada2',
                    set: function set(registro) {
                        this._entrada2 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._entrada2.id,
                            hora: HoraHelper.getHoraString(this._entrada2.hora)
                        });
                    }
                }, {
                    key: 'entrada3',
                    set: function set(registro) {
                        this._entrada3 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._entrada3.id,
                            hora: HoraHelper.getHoraString(this._entrada3.hora)
                        });
                    }
                }, {
                    key: 'saida1',
                    set: function set(registro) {
                        this._saida1 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._saida1.id,
                            hora: HoraHelper.getHoraString(this._saida1.hora)
                        });
                    }
                }, {
                    key: 'saida2',
                    set: function set(registro) {
                        this._saida2 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._saida2.id,
                            hora: HoraHelper.getHoraString(this._saida2.hora)
                        });
                    }
                }, {
                    key: 'saida3',
                    set: function set(registro) {
                        this._saida3 = HoraHelper.getDuration(registro);
                    },
                    get: function get() {
                        return new Object({
                            id: this._saida3.id,
                            hora: HoraHelper.getHoraString(this._saida3.hora)
                        });
                    }
                }, {
                    key: 'data',
                    get: function get() {
                        return moment(this._dataPonto).format('DD/MM/YYYY');
                    }
                }, {
                    key: 'totalFormatado',
                    get: function get() {
                        return HoraHelper.getHoraString(this._total());
                    }
                }, {
                    key: 'total',
                    get: function get() {
                        return this._total().asMilliseconds();
                    }
                }, {
                    key: 'bancoHorasFormatado',
                    get: function get() {
                        return HoraHelper.getHoraString(this._banco());
                    }
                }, {
                    key: 'bancoHoras',
                    get: function get() {
                        return this._banco();
                    }
                }]);

                return Ponto;
            }();

            _export('default', Ponto);
        }
    };
});
//# sourceMappingURL=Ponto.js.map
