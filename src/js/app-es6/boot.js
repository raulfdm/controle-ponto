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
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
        $('.dropdown-button').dropdown();
        
    } else {
        window.location.replace("/autenticar.html");        
    }
});