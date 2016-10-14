import View from './View';
import Modal from '../models/Modal';
import DateHelper from '../helpers/DateHelper';
import HoraHelper from '../helpers/HoraHelper';

class PontosView extends View {

    constructor(elemento, horasDiarias, contexto) {
        //elemento do DOM que receberá o TEMPLATE e passará para a classe PAI (view)
        super(elemento);
        this._horasDiarias = horasDiarias;

        elemento.addEventListener('click', function (e) {

            var idElemento = (e.target.parentNode.attributes.hasOwnProperty("id-banco") ? e.target.parentNode.attributes[0].textContent : null);

            if (e.target.nodeName == 'TD' && idElemento) {                
                let modal = new Modal(idElemento, contexto);                
            }
        })
    }

    template(model) {

        return `
            <table class="highlight centered responsive-table card col s8 push-s1 table-ponto">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Hora-1</th>
                        <th>Hora-2</th>
                        <th>Hora-3</th>
                        <th>Hora-4</th>
                        <th>Hora-5</th>
                        <th>Hora-6</th>
                        <th>Total Trabalho</th>
                        <th>Banco de horas</th>
                    </tr>
                </thead>
                <tbody>                    
                    ${model._pontos.map(n => `
                        <tr id-banco="${n._id}">
                            <td>${DateHelper.dataParaTexto(n._data_cadastro)}</td>
                            <td>${HoraHelper.getHoraString(n._hora1)}</td>
                            <td>${HoraHelper.getHoraString(n._hora2)}</td>
                            <td>${(HoraHelper.getHoraString(n._hora3) ? HoraHelper.getHoraString(n._hora3) : '-')}</td>
                            <td>${(HoraHelper.getHoraString(n._hora4) ? HoraHelper.getHoraString(n._hora4) : '-')}</td>
                            <td>${HoraHelper.getHoraString(n._hora5)}</td>
                            <td>${HoraHelper.getHoraString(n._hora6)}</td>
                            <td>${HoraHelper.getHoraString(n._total)}</td>
                            <td>${HoraHelper.getHoraString(n._total - HoraHelper.getMilissegundos(this._horasDiarias))}</td>
                        <tr>
                        `
            ).join('')/** O join concatena os elementos de um array em uma mega string */}
                </tbody>
                <tfoot>
                
                        <td colspan="7"></td>
                        <td>${HoraHelper.getHoraString(model.horasTrabalhadas)}</td>
                        <td>${''}</td>
                </tfoot>
            </table>
        `;
    }
}

export default PontosView;