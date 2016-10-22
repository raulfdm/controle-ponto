import View from './View';

class SomaHorasView extends View {

    constructor(elemento, contexto) {
        //elemento do DOM que receberá o TEMPLATE e passará para a classe PAI (view)
        super(elemento);

    }

    template(model) {

        return `
            <p class="card">Horas Trabalhadas: <span id="horasTrabalhadas">00:00</span></p>
            <p class="card">Banco de Horas: <span id="bancoDeHoras">00:00</span></p>        
        `;

    }
}

export default SomaHorasView;