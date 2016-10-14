import { } from 'js/lib/fire-base.js';
import { } from './polyfill/fetch-api';
import { currentInstance } from './controllers/PontoController';
import MaskHelper from './helpers/MaskHelper'


let pontoController = new currentInstance();

document.querySelector('.form-cad-ponto').onsubmit = pontoController.adicionaPonto.bind(pontoController);
document.querySelector('.btn-carregar').onclick = pontoController.importaPontos.bind(pontoController);
document.querySelector('.btn-exclui').onclick = pontoController.limpaGrid.bind(pontoController);
document.querySelectorAll('.input-hora').forEach((campo) => {
    campo.onkeypress = MaskHelper.mask.bind(pontoController);
    //campo.oninvalid = campo.setCustomValidity('Por favor, preencha o campo');    
});


$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 16 // Creates a dropdown of 15 years to control year            

});