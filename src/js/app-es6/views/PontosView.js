import View from './View';
import Modal from '../models/Modal';
import HoraHelper from '../helpers/HoraHelper';

class PontosView extends View {

    constructor(elemento, contexto) {
        //elemento do DOM que receberá o TEMPLATE e passará para a classe PAI (view)
        super(elemento);

        elemento.addEventListener('click', function(e) {
            let idRegistro = e.target.id;
            if (e.target.nodeName == 'TD' && idRegistro) {
                document.querySelector('#data_registro').value = e.target.parentElement.childNodes[1].textContent;
                document.querySelector('#hora_registro').value = e.target.textContent;
                document.querySelector('.form-cadastro-ponto').attributes.getNamedItem("id-registro").value = idRegistro;
                $('#modal-registro').openModal({
                    complete: function() {
                        contexto.limpaForm()
                    }
                });
            }
        })
    }

    template(model) {

            let listaPontos = [];
            let somaHorasTrabalhadas = 0;
            let somaBancoDeHoras = 0;
            model._pontos.map(array => {
                //Mapeia os objetos pra dentro da lista fora do escopo
                listaPontos = array.map(pontoObj => pontoObj);
                //Soma as horas trabalhadas e o banco             
                listaPontos.forEach(function(element) {

                    somaHorasTrabalhadas += element.total;
                    somaBancoDeHoras += element.bancoHoras;
                });

            })
            
            document.querySelector('#horasTrabalhadas').textContent = HoraHelper.getHoraString(moment.duration(somaHorasTrabalhadas, 'milliseconds'));
            document.querySelector('#bancoDeHoras').textContent = HoraHelper.getHoraString(moment.duration(somaBancoDeHoras, 'milliseconds'));

            return `
         <table class="highlight centered responsive-table table-ponto">
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
                            <td id="${n.entrada1.id}"> ${n.entrada1.hora}</td>
                            <td id="${n.saida1.id}"> ${n.saida1.hora}</td>
                            <td id="${n.entrada2.id}"> ${n.entrada2.hora}</td>
                            <td id="${n.saida2.id}"> ${n.saida2.hora}</td>   
                            <td id="${n.entrada3.id}"> ${n.entrada3.hora}</td>                             
                            <td id="${n.saida3.id}"> ${n.saida3.hora}</td>
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