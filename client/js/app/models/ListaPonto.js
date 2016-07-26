class ListaPonto {

    constructor() {
        this._pontos = [];
    }

    adiciona(ponto) {
        this._pontos.push(ponto);
    }


    get pontos() {
        return [...this._pontos];
    }



}