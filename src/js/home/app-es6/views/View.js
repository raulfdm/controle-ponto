class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        //innerHTML converte a string como elementos do DOM
        this._elemento.innerHTML = this.template(model);
    }
}

export default View;