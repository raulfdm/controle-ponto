import View from './View';

class ModalDeleteView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return `        
            <div id="modal-excluir" class="modal">
                <div class="modal-content">
                    <h4>Atenção!</h4>
                    <p>Deseja realmente excluir este ponto?</p>
                </div>
                <div class="modal-footer">
                    <a class="btn-modal-sim modal-action modal-close waves-effect red lighten-1 waves-green btn-flat">Sim</a>
                    <a class="btn-modal-nao modal-action modal-close waves-effect waves-green btn-flat">Não</a>
                </div>
            </div>
        `
    }
}

export default ModalDeleteView;