"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaPonto;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

            ListaPonto = function () {
                function ListaPonto() {
                    _classCallCheck(this, ListaPonto);

                    this._pontos = [];
                }

                _createClass(ListaPonto, [{
                    key: "adiciona",
                    value: function adiciona(pontos) {
                        var pontosOrderByData = _.orderBy(pontos, ["data"], ["asc"]);
                        this._pontos = [].concat(_toConsumableArray(new Array(pontosOrderByData)));
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {
                        try {
                            this._pontos = [];
                        } catch (e) {
                            throw new Error(e);
                        }
                    }
                }, {
                    key: "pontos",
                    get: function get() {
                        return [].concat(_toConsumableArray(this._pontos));
                    }
                }, {
                    key: "horasTrabalhadas",
                    get: function get() {
                        return this._pontos.reduce(function (total, ponto) {
                            return total += ponto._total;
                        }, 0);
                    }
                }]);

                return ListaPonto;
            }();

            _export("default", ListaPonto);
        }
    };
});
//# sourceMappingURL=ListaPonto.js.map
