'use strict';

System.register(['./View', '../helpers/HoraHelper'], function (_export, _context) {
    "use strict";

    var View, HoraHelper, _createClass, PontosView;

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
        }, function (_helpersHoraHelper) {
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

            PontosView = function (_View) {
                _inherits(PontosView, _View);

                function PontosView(elemento, contexto) {
                    _classCallCheck(this, PontosView);

                    var _this = _possibleConstructorReturn(this, (PontosView.__proto__ || Object.getPrototypeOf(PontosView)).call(this, elemento));

                    elemento.addEventListener('click', function (e) {
                        var idRegistro = e.target.id;
                        if (e.target.nodeName == 'TD' && idRegistro) {
                            document.querySelector('#data_registro').value = e.target.parentElement.childNodes[1].textContent;
                            document.querySelector('#hora_registro').value = e.target.textContent;
                            document.querySelector('.form-cadastro-ponto').attributes.getNamedItem("id-registro").value = idRegistro;
                            $('#modal-registro').openModal({
                                complete: function complete() {
                                    contexto.limpaForm();
                                }
                            });
                        }
                    });
                    return _this;
                }

                _createClass(PontosView, [{
                    key: 'template',
                    value: function template(model) {

                        var listaPontos = [];
                        var somaHorasTrabalhadas = 0;
                        var somaBancoDeHoras = 0;
                        model._pontos.map(function (array) {
                            //Mapeia os objetos pra dentro da lista fora do escopo
                            listaPontos = array.map(function (pontoObj) {
                                return pontoObj;
                            });
                            //Soma as horas trabalhadas e o banco             
                            listaPontos.forEach(function (element) {

                                somaHorasTrabalhadas += element.total;
                                somaBancoDeHoras += element.bancoHoras;
                            });
                        });

                        document.querySelector('#horasTrabalhadas').textContent = HoraHelper.getHoraString(moment.duration(somaHorasTrabalhadas, 'milliseconds'));
                        document.querySelector('#bancoDeHoras').textContent = HoraHelper.getHoraString(moment.duration(somaBancoDeHoras, 'milliseconds'));

                        return '\n         <table class="highlight centered responsive-table table-ponto">\n                <thead class="card">\n                    <tr>\n                        <th>Data</th>\n                        <th>Entrada</th>\n                        <th>Sa\xEDda</th>\n                        <th>Entrada</th>\n                        <th>Sa\xEDda</th>\n                        <th>Entrada</th>\n                        <th>Sa\xEDda</th>\n                        <th>Total Trabalho</th>\n                        <th>Banco de horas</th>\n                    </tr>\n                </thead>\n                <tbody>                    \n                    ' + listaPontos.map(function (n) {
                            return '\n                        <tr>                            \n                            <td>' + n.data + '</td>\n                            <td id="' + n.entrada1.id + '"> ' + n.entrada1.hora + '</td>\n                            <td id="' + n.saida1.id + '"> ' + n.saida1.hora + '</td>\n                            <td id="' + n.entrada2.id + '"> ' + n.entrada2.hora + '</td>\n                            <td id="' + n.saida2.id + '"> ' + n.saida2.hora + '</td>   \n                            <td id="' + n.entrada3.id + '"> ' + n.entrada3.hora + '</td>                             \n                            <td id="' + n.saida3.id + '"> ' + n.saida3.hora + '</td>\n                            <td>' + n.totalFormatado + '</td>\n                            <td>' + n.bancoHorasFormatado + '</td>\n                        <tr>\n                        ';
                        }).join('') /** O join concatena os elementos de um array em uma mega string */ + '\n                </tbody>\n                \n            </table>\n            \n        ';
                    }
                }]);

                return PontosView;
            }(View);

            _export('default', PontosView);
        }
    };
});
//# sourceMappingURL=PontosView.js.map
