'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, HoraHelper;

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

            HoraHelper = function () {
                function HoraHelper() {
                    _classCallCheck(this, HoraHelper);

                    throw new Error('Essa classe não pode ser instanciada');
                }

                _createClass(HoraHelper, null, [{
                    key: 'getDuration',
                    value: function getDuration(hora) {
                        var m = moment(hora, 'HH:mm');

                        return moment.duration({
                            minutes: m.minutes(),
                            hours: m.hours()
                        });
                    }
                }, {
                    key: 'getHoraString',
                    value: function getHoraString(duration) {

                        if (!duration) {
                            return this.getDuration("00:00");
                            //throw new Error("Milissegundos não pode ser vazio");
                        }

                        var horaFull = duration.asHours() < 0 ? duration.asHours() * -1 : duration.asHours();
                        var hours = Math.trunc(horaFull);
                        var minutes = Math.round(horaFull % 1 * 60);

                        if (hours.toString().length == 1) {
                            hours = "0" + hours;
                        }
                        if (minutes.toString().length == 1) {
                            minutes = "0" + minutes;
                        }
                        return duration.asMilliseconds() < 0 ? '-' + hours + ':' + minutes : hours + ':' + minutes;
                    }
                }, {
                    key: 'getDiferencaHora',
                    value: function getDiferencaHora(horaInicio, horaFim) {

                        return horaFim - horaInicio;
                    }
                }]);

                return HoraHelper;
            }();

            _export('default', HoraHelper);
        }
    };
});
//# sourceMappingURL=HoraHelper.js.map
