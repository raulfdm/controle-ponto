'use strict';

System.register(['./View'], function (_export, _context) {
    "use strict";

    var View, _createClass, SomaHorasView;

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

            SomaHorasView = function (_View) {
                _inherits(SomaHorasView, _View);

                function SomaHorasView(elemento, contexto) {
                    _classCallCheck(this, SomaHorasView);

                    return _possibleConstructorReturn(this, (SomaHorasView.__proto__ || Object.getPrototypeOf(SomaHorasView)).call(this, elemento));
                }

                _createClass(SomaHorasView, [{
                    key: 'template',
                    value: function template(model) {

                        return '\n            <p class="card">Horas Trabalhadas: <span id="horasTrabalhadas">00:00</span></p>\n            <p class="card">Banco de Horas: <span id="bancoDeHoras">00:00</span></p>        \n        ';
                    }
                }]);

                return SomaHorasView;
            }(View);

            _export('default', SomaHorasView);
        }
    };
});
//# sourceMappingURL=SomaHorasView.js.map
