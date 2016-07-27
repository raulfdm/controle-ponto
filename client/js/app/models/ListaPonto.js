class ListaPonto {

    constructor() {
        this._pontos = [];
    }

    adiciona(ponto) {
        this._pontos.push(ponto);
    }

    esvazia(){
        this._ponto = [];
    }


    get pontos() {
        return [...this._pontos];
    }



}