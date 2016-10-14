class Modal {

    constructor(idElemento, contexto) {
        this._idElemento = idElemento;
        this._contexto = contexto;

        $('#modal-excluir').openModal();

        //Revisar isso, ta misturando os códigos do Modal com o da View de Pontos; 
        document.querySelector('.btn-modal-sim').onclick = this._delete.bind(this);
    }


    _delete() {        
        this._contexto.excluiPonto(this._idElemento);
    }


}

export default Modal;