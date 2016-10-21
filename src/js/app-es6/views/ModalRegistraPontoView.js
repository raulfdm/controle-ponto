import View from './View';

class ModalRegistraPontoView extends View {

    constructor(elemento) {

        super(elemento);

    }

    template(model) {
        return `
        <div id="modal-registro" class="modal modal-fixed-footer">
            <h5 class="center-align">Registro de Ponto</h5>
            <div class="modal-container">
                <form action="#" class="modal-content form-cadastro-ponto" id-registro="">
                    <div class="input-field">
                        <label for="">Data</label>
                        <input id="data_registro" name="data_registro" type="text" placeholder="30/12/1900" readonly required>
                    </div>
                    <div class="input-field">
                        <label for="hora_registro">Horário</label>
                        <input class="input-hora" id="hora_registro" name="hora_registro" type="text" placeholder="08:00" required>                        
                    </div>
                </form>
                <div class="modal-footer">
                    <button class="btn-registra-ponto light-blue darken-4 col s12 btn waves-effect waves-light center" type="submit" name="action">
                            Gravar <i class="material-icons center">done</i></button>
                    <!--<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>-->
                </div>
            </div>
        </div>
        `
    }
}

export default ModalRegistraPontoView;