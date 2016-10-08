class PontoController { 

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        let self = this;
        //Elementos do Switch
        this._horaFormat = $('#horaFormat');
        this._hora12 = $('#hora12');
        this._hora24 = $('#hora24');
        //Formulário
        this._data_cadastro = $('#data_cadastro');
        this._horasDiarias = $('#horaTrabalhada');
        this._hora1 = $('#hora1');
        this._hora2 = $('#hora2');
        this._hora3 = $('#hora3');
        this._hora4 = $('#hora4');
        this._hora5 = $('#hora5');
        this._hora6 = $('#hora6');

        this._camposHora = document.querySelectorAll('.input-hora');

        this._listaPontos = new Bind(new ListaPonto(), new PontosView($('#pontosView'), this._horasDiarias.value), 'adiciona', 'esvazia');

        this._mensagem = new Mensagem();

        this._adicionaEventos(self);
    }

    //Métodos
    adiciona(event) {
        event.preventDefault();
        let service = new PontoService();
        let ponto = new Ponto(
            DateHelper.dataParaTexto(new Date(this._data_cadastro.value)),
            HoraHelper.getMilissegundos(this._hora1.value),
            HoraHelper.getMilissegundos(this._hora2.value),
            HoraHelper.getMilissegundos(this._hora3.value),
            HoraHelper.getMilissegundos(this._hora4.value),
            HoraHelper.getMilissegundos(this._hora5.value),
            HoraHelper.getMilissegundos(this._hora6.value)
        );
        //Evitando Callback Hell
        Promise.all([
            service.salvarPonto(ponto)
        ]).then(mensagem => {
            this._listaPontos.adiciona(ponto);
            this._limpaForm();
            this._mensagem.toast = "Ponto adicionado com sucesso";
        })
            .catch(error => this._mensagem.toast = error);

    }

    apaga(chamada = null) {

        let msg;

            if (this._listaPontos.pontos.length == 0) {
                msg = 'Lista já está vazia'
                this._mensagem.toast = msg;
            } else {
                if (!this._listaPontos.esvazia(this._listaPontos)) {
                    msg = 'Dados removidos com sucesso!';
                    this._mensagem.toast = msg;
                } else {
                    msg = 'Não foi possível remover os dados';
                    this._mensagem.toast = msg;
                    throw new Error(msg);
            }
        }
    }

    importaPontos() {
        this.apaga();
        let service = new PontoService();
        //Evitando Callback Hell
        Promise.all([
            service.obterPontos()
        ]).then(pontos => {            
            pontos.reduce((retorno, item) => retorno.concat(item), [])
                .forEach(ponto => this._listaPontos.adiciona(ponto));
            this._mensagem.toast = "Dados importados com sucesso";
        })
            .catch(error => this._mensagem.toast = error);
    }

    _limpaForm() {
        //this._data_cadastro.value = '';
        this._hora1.value = '';
        this._hora1.focus();
        this._hora2.value = '';
        this._hora3.value = '';
        this._hora4.value = '';
        this._hora5.value = '';
        this._hora6.value = '';

        //reinicia os inputs (materializecss)
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
    }

    _adicionaEventos(self) {

        this._camposHora.forEach((campo) => {
            campo.addEventListener('keypress', function (evento) {
                MaskHelper.mask(evento);
            });

            campo.addEventListener('invalid', function () {
                campo.setCustomValidity('Por favor, preencha o campo');
            })
        });

        this._horaFormat.addEventListener('change', function () {

            if (this.dataset.hora == 24) {
                this.dataset.hora = 12;
                self._hora24.classList.remove('horaAtiva');
                self._hora12.classList.add('horaAtiva');

            } else {
                this.dataset.hora = 24;
                self._hora12.classList.remove('horaAtiva');
                self._hora24.classList.add('horaAtiva');
            }
        })
    }
};