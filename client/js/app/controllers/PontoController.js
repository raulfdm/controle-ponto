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

        this._listaPontos = new ListaPonto();
        //Cria elemento passando o local onde a view irá se fixar
        this._pontosView = new PontosView($('#pontosView'));
        console.log($('#pontosView'));

        //Insere a tabela
        this._pontosView.update(this._listaPontos);
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



        this._listaPontos.adiciona(ponto);
        this._limpaForm();

        //atualiza a tabela a cada insert
        this._pontosView.update(this._listaPontos);
    }

    _limpaForm() {
        this._data_cadastro.value = '';
        //this._hora1.value = '';
        this._hora1.focus();
        //this._hora2.value = '';
        //this._hora3.value = '';
        //this._hora4.value = '';
        //this._hora5.value = '';
        //this._hora6.value = '';

        //reinicia os inputs (materializecss)
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
    }
}