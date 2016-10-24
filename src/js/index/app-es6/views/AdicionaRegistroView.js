import View from './View';

class AdicionaRegistroView extends View {

    constructor(elemento) {

        super(elemento);
             
    }

    template(model) {
        return `
        <div class="fixed-action-btn btn-modal-registro">
            <a data-target="modal-registro" class="btn-floating btn-large waves-effect waves-light red modal-trigger"><i class="material-icons">add</i></a>
        </div>
        `
    }
}

export default AdicionaRegistroView;

