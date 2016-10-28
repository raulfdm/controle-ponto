import View from './View';

class ModalRegistraPontoView extends View {

    constructor(elemento, contexto) {

        super(elemento);
        let contentExclusao;
        let idTarget;
        let idRegistro;
        let showContentConfirmacao

        //event bubbling
        elemento.addEventListener('click', function(e) {
            contentExclusao = document.querySelector('.confirma-exclusao-content');

            showContentConfirmacao = function(visible) {
                if (visible) {
                    contentExclusao.style.opacity = 1;
                    contentExclusao.style.zIndex = 2;
                } else {
                    contentExclusao.style.opacity = 0;
                    contentExclusao.style.zIndex = -1;
                }
            }


            showContentConfirmacao(false);

            //Pega o ID do target
            idTarget = e.target.id;
            //Pega o ID do Registro
            idRegistro = document.querySelector('.form-cadastro-ponto').attributes.getNamedItem("id-registro").value;
            //Validação para saber de onde veio o click
            if (idTarget == 'btn-excluir-nao') {
                showContentConfirmacao(false);
            }

            if (idTarget == 'btn-excluir-sim') {
                showContentConfirmacao(false);
                contexto.excluirPonto(idRegistro);
                $('#modal-registro').closeModal();

            }

            if (idTarget == 'btn-deleta-ponto' || e.target.textContent == 'delete') {
                if (idRegistro) {
                    showContentConfirmacao(true)
                }
            }

            //método para abstrair a visualização do elemento
        })

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
                        <input oninvalid="this.setCustomValidity(this.willValidate? '':'Por favor, digitar um valor válido')" class="input-hora" id="hora_registro" name="hora_registro" type="text" placeholder="08:00" pattern="[0-2]\\d:[0-5]\\d" required>
                    </div>
                    <input type="submit" id="salva-registro" style="display: none"></input>
                </form>
                <div class="salva-deleta modal-footer">
                    <button id="btn-deleta-ponto"><i class="material-icons center">delete</i></button>
                    <label for="salva-registro" id="btn-registra-ponto" class="btn-small light-blue darken-4 col s12 btn waves-effect waves-light center" type="submit" name="action"><i class="material-icons center">done</i></label for="">
                </div>
                    <div class="confirma-exclusao-content modal-footer">
                        <p>Deseja excluir?</p>
                        <button id="btn-excluir-nao" class="btn btn-small">Não</button>
                        <button id="btn-excluir-sim" class="btn red lighten-2 btn-small">Sim</button>
                    </div>
            </div>
        </div>
        `
    }
}

export default ModalRegistraPontoView;
