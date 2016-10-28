class ListaPonto {

    constructor() {
        this._pontos = [];
    }

    adiciona(pontos) {
        let pontosOrderByData = _.orderBy(pontos,["data"],["asc"])            
        this._pontos = [...new Array(pontosOrderByData)];
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