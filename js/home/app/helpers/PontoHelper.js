'use strict';

System.register(['../models/Ponto'], function (_export, _context) {
    "use strict";

    var Ponto, _slicedToArray, _createClass, PontoHelper;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsPonto) {
            Ponto = _modelsPonto.default;
        }],
        execute: function () {
            _slicedToArray = function () {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;

                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);

                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }

                    return _arr;
                }

                return function (arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

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

            PontoHelper = function () {
                function PontoHelper() {
                    _classCallCheck(this, PontoHelper);
                }

                _createClass(PontoHelper, null, [{
                    key: 'groupBy',
                    value: function groupBy(list, keyGetter) {

                        var map = new Map();
                        list.forEach(function (registro) {

                            var key = keyGetter(registro);

                            if (!map.has(key)) {
                                map.set(key, [registro]);
                            } else {
                                map.get(key).push(registro);
                            }
                        });

                        var resultado = [];
                        var ponto = void 0;

                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var _step$value = _slicedToArray(_step.value, 2);

                                var data = _step$value[0];
                                var registros = _step$value[1];

                                ponto = new Ponto(data, _.orderBy(registros, ['_data_registro'], ['asc']));
                                resultado.push(ponto);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        return resultado;
                    }
                }]);

                return PontoHelper;
            }();

            _export('default', PontoHelper);
        }
    };
});
//# sourceMappingURL=PontoHelper.js.map
