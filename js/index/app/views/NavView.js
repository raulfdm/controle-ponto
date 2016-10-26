'use strict';

System.register(['./View'], function (_export, _context) {
    "use strict";

    var View, _createClass, NavView;

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

            NavView = function (_View) {
                _inherits(NavView, _View);

                function NavView(elemento) {
                    _classCallCheck(this, NavView);

                    return _possibleConstructorReturn(this, (NavView.__proto__ || Object.getPrototypeOf(NavView)).call(this, elemento));
                }

                _createClass(NavView, [{
                    key: 'template',
                    value: function template(model) {
                        return '               \n        <ul id="dropdown-options-menu" class="dropdown-content">\n            <li><a onclick="firebase.auth().signOut()" id="btn-logout" href="#!">Log Out</a></li>\n        </ul>\n        <nav class="main-nav">\n        <div>\n        <a href="#" class="brand-logo center">Pontex</a>        \n            <div class="nav-wrapper">            \n                <ul class="right">\n                    <li><a class="dropdown-button" data-beloworigin="true" href="#!" data-activates="dropdown-options-menu"><i class="material-icons">more_vert</i></a></li>\n                </ul>\n            </div>                            \n        </div>\n        </nav>\n        ';
                    }
                }]);

                return NavView;
            }(View);

            _export('default', NavView);
        }
    };
});
//# sourceMappingURL=NavView.js.map
