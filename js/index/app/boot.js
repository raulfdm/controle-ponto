'use strict';

System.register(['./controllers/PontoController', './helpers/MaskHelper'], function (_export, _context) {
    "use strict";

    var currentInstance, MaskHelper;
    return {
        setters: [function (_controllersPontoController) {
            currentInstance = _controllersPontoController.currentInstance;
        }, function (_helpersMaskHelper) {
            MaskHelper = _helpersMaskHelper.default;
        }],
        execute: function () {

            firebase.auth().onAuthStateChanged(function (user) {

                if (user) {
                    var pontoController = new currentInstance();
                    try {
                        //document.querySelector('.email-usuario').innerText = user.email;
                        document.querySelector('.form-cadastro-ponto').onsubmit = pontoController.salvaPonto.bind(pontoController);
                        document.querySelector('.btn-carregar').onclick = pontoController.importaPontos.bind(pontoController);
                        document.querySelector('.input-hora').onkeyup = MaskHelper.mask.bind(pontoController);
                        Materialize.updateTextFields();

                        //Eventos
                        $('.dropdown-button').dropdown();
                        $('.modal-trigger').leanModal({
                            complete: pontoController.limpaForm.bind(pontoController)
                        });
                        $('select').material_select();

                        ////DatePicker
                        var picker = new Pikaday({
                            field: document.getElementById('data_registro'),
                            firstDay: 1,
                            reposition: false,
                            format: 'DD/MM/YYYY',
                            minDate: new Date(2000, 0, 1),
                            maxDate: new Date(2020, 12, 31),
                            yearRange: [2000, 2020]
                        });
                        pontoController._carregaPontosDoMes();
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    window.location.replace("/autenticar.html");
                }
            });
        }
    };
});
//# sourceMappingURL=boot.js.map
