class ListaPonto {

    constructor(trap) {
        this._pontos = [];
        this._trap = trap;

    }

    adiciona(ponto) {
        this._pontos.push(ponto);
        this._trap(this);
    }

    esvazia() {

        try {
            this._pontos = [];
            this._trap(this);
            return true;
        } catch (e) {
            throw new Error(e);
        }

    }

    //Getters and Setters
    get pontos() {
        return [...this._pontos];
    }

}