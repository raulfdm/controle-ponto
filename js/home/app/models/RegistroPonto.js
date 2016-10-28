'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, RegistroPonto;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            RegistroPonto = function () {
                function RegistroPonto(dataRegistro) {
                    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                    _classCallCheck(this, RegistroPonto);

                    this._id = id;
                    this._data_registro = moment(dataRegistro).format();
                    Object.freeze(this);
                }

                //Getters and Setters


                _createClass(RegistroPonto, [{
                    key: 'toString',
                    value: function toString() {
                        return {
                            id_ponto: this._id,
                            data_registro: moment(this._data_registro).format()
                        };
                    }
                }, {
                    key: 'id',
                    get: function get() {
                        return this._id;
                    }
                }, {
                    key: 'data_registro',
                    get: function get() {
                        return this._data_registro;
                    }
                }]);

                return RegistroPonto;
            }();

            _export('default', RegistroPonto);
        }
    };
});
//# sourceMappingURL=RegistroPonto.js.map
