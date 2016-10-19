import View from './View';
import Modal from '../models/Modal';
import DateHelper from '../helpers/DateHelper';
import HoraHelper from '../helpers/HoraHelper';

class PontosView extends View {

    constructor(elemento, contexto) {
        //elemento do DOM que receberá o TEMPLATE e passará para a classe PAI (view)
        super(elemento);

        /*elemento.addEventListener('click', function(e) {

            var idElemento = (e.target.parentNode.attributes.hasOwnProperty("id-banco") ? e.target.parentNode.attributes[0].textContent : null);

            if (e.target.nodeName == 'TD' && idElemento) {
                let modal = new Modal(idElemento, contexto);
            }
        })*/
    }

    template(model) {

        let listaPontos = [];
        let somaHorasTrabalahdas = 0;
        let somaBancoDeHoras = 0;

        model._pontos.map(array => {
            //Mapeia os objetos pra dentro da lista fora do escopo
            listaPontos = array.map(pontoObj => pontoObj);
            //Soma as horas trabalhadas e o banco 

            listaPontos.forEach(function(element) {
                somaHorasTrabalahdas += element.total;
                somaBancoDeHoras += element.bancoHoras;
            });

        })

        listaPontos.map(n=>{
            console.log(n);
        })

        console.log(HoraHelper.getHoraString(moment.duration(somaHorasTrabalahdas, 'milliseconds')));
        return `
         <table class="highlight centered responsive-table card table-ponto">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Total Trabalho</th>
                        <th>Banco de horas</th>
                    </tr>
                </thead>
                <tbody>                    
                    ${listaPontos.map(n => `
                        <tr>                            
                            <td>${n.data}</td>
                            <td> ${n.entrada1}</td>
                            <td> ${n.saida1}</td>
                            <td> ${n.saida2}</td>
                            <td> ${n.entrada2}</td>
                            <td> ${n.entrada3}</td>                                                        
                            <td> ${n.saida3}</td>
                            <td>${n.totalFormatado}</td>
                            <td>${n.bancoHorasFormatado}</td>
                        <tr>
                        `
            ).join('')/** O join concatena os elementos de um array em uma mega string */}
                </tbody>
                
            </table>
        `;

    }
}

export default PontosView;