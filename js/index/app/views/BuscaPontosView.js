'use strict';

System.register(['./View'], function (_export, _context) {
    "use strict";

    var View, _createClass, BuscaPontosView;

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

            BuscaPontosView = function (_View) {
                _inherits(BuscaPontosView, _View);

                function BuscaPontosView(elemento) {
                    _classCallCheck(this, BuscaPontosView);

                    return _possibleConstructorReturn(this, (BuscaPontosView.__proto__ || Object.getPrototypeOf(BuscaPontosView)).call(this, elemento));
                }

                _createClass(BuscaPontosView, [{
                    key: 'template',
                    value: function template(model) {
                        return '        \n            <form class="form-busca-pontos">\n                <select class="browser-default mes-filtro z-depth-1" required>\n                    <option value="" disabled selected>M\xEAs</option>\n                    <option value="0">Janeiro</option>\n                    <option value="1">Fevereiro</option>\n                    <option value="2">Mar\xE7o</option>\n                    <option value="3">Abril</option>\n                    <option value="4">Maio</option>\n                    <option value="5">Junho</option>\n                    <option value="6">Julho</option>\n                    <option value="7">Agosto</option>\n                    <option value="8">Setembro</option>\n                    <option value="9">Outubro</option>\n                    <option value="10">Novembro</option>\n                    <option value="11">Dezembro</option>                    \n                </select>\n                <select class="browser-default ano-filtro z-depth-1" required>\n                    <option value="" disabled selected>Ano</option>\n                    <option value="2015">2015</option>\n                    <option value="2016">2016</option>                                        \n                </select>\n                <button type="submit" class="btn light-blue darken-1 waves-effect waves-light btn-carregar btn-small z-depth-1">\n                            <i class="material-icons center">loop</i>\n                </button>                \n            </form>\n        ';
                    }
                }]);

                return BuscaPontosView;
            }(View);

            _export('default', BuscaPontosView);
        }
    };
});
//# sourceMappingURL=BuscaPontosView.js.map
