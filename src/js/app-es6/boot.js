import 'js/lib/fire-base.js';
import './polyfill/fetch-api';
import { currentInstance } from './controllers/PontoController';
import MaskHelper from './helpers/MaskHelper';
//

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        let pontoController = new currentInstance();

        document.querySelector('.email-usuario').innerText = user.email;
        document.querySelector('.form-cad-ponto').onsubmit = pontoController.adicionaPonto.bind(pontoController);
        document.querySelector('.btn-carregar').onclick = pontoController.importaPontos.bind(pontoController);
        document.querySelector('.btn-exclui').onclick = pontoController.limpaGrid.bind(pontoController);
        document.querySelectorAll('.input-hora').forEach((campo) => {
            campo.onkeypress = MaskHelper.mask.bind(pontoController); 
            //campo.oninvalid = campo.setCustomValidity('Por favor, preencha o campo');    
        });



        //Init                
        $('.dropdown-button').dropdown();
        
        var picker = new Pikaday({
            field: document.getElementById('data_registro'),
            firstDay: 1,
            format: 'DD-MM-YYYY',
            /*onSelect: function() {
                console.log(this.getMoment().format('dddd'));
            }, */
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2020, 12, 31),
            yearRange: [2000, 2020]
        });

    } else {
        window.location.replace("/autenticar.html");        
    }
});