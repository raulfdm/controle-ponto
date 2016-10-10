import {} from 'js/lib/fire-base.js';
import {
    currentInstance
} from './controllers/PontoController';
import {} from './polyfill/fetch-api';


let pontoController = new currentInstance();

document.querySelector('.form-cad-ponto').onsubmit = pontoController.adiciona.bind(pontoController);
document.querySelector('.btn-carregar').onclick = pontoController.importaPontos.bind(pontoController);
document.querySelector('.btn-exclui').onclick = pontoController.apaga.bind(pontoController);

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 16 // Creates a dropdown of 15 years to control year            

});