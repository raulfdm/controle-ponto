class ListaPonto {

    constructor() {
        this._pontos = [];
    }

    adiciona(ponto) {
        this._pontos = [...ponto];
    }

    esvazia() {
        try {
            this._pontos = [];
        } catch (e) {
            throw new Error(e);
        }

    }

    //Getters and Setters
    get pontos() {
        return [...this._pontos];
    }

    get horasTrabalhadas() {
        return this._pontos.reduce((total, ponto) => total += ponto._total, 0);
    }

}

export default ListaPonto;