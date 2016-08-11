class PontosView extends View{

    constructor(elemento) {
        //elemento do DOM que receberá o TEMPLATE e passará para a classe PAI (view)
        super(elemento);
    }

    template(model) {
            return `
            <table class="highlight centered responsive-table card col s8 push-s1">
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
                        <tr>
                            <td>${DateHelper.dataParaTexto(n._data_cadastro)}</td>
                            <td>${HoraHelper.getHoraString(n._hora1)}</td>
                            <td>${HoraHelper.getHoraString(n._hora2)}</td>
                            <td>${(HoraHelper.getHoraString(n._hora3)? HoraHelper.getHoraString(n._hora3):'-')}</td>
                            <td>${(HoraHelper.getHoraString(n._hora4)? HoraHelper.getHoraString(n._hora4):'-')}</td>
                            <td>${HoraHelper.getHoraString(n._hora5)}</td>
                            <td>${HoraHelper.getHoraString(n._hora6)}</td>
                            <td>${HoraHelper.getHoraString(n._total)}</td>
                            <td>${'console.log(n)'}</td>
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