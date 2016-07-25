class PontoController {

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        this._data_cadastro = $('#data_cadastro');
        this._hora1 = $('#hora1');
        this._hora2 = $('#hora2');
        this._hora3 = $('#hora3');
        this._hora4 = $('#hora4');
        this._hora5 = $('#hora5');
        this._hora6 = $('#hora6');

    }

    //Métodos
    adiciona(event) {
        event.preventDefault();
        let ponto = new Ponto(
            this._data_cadastro.value,
            this._hora1.value,
            this._hora2.value,
            this._hora3.value,
            this._hora4.value,
            this._hora5.value,
            this._hora6.value
        );

        console.log(ponto);
    }
}