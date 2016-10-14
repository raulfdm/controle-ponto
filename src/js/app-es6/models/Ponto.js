class Ponto {

    constructor(data, hora1, hora2, hora3, hora4, hora5, hora6, id = '') {
        this._id = id;
        this._data_cadastro = data;

        this._hora1 = hora1;
        this._hora2 = hora2;
        this._hora3 = hora3;
        this._hora4 = hora4;
        this._hora5 = hora5;
        this._hora6 = hora6;

        this._total = this._total();



        Object.freeze(this);
    }

    //Methods
    _total(timeObj) {
        let hora1 = this._hora1;
        let hora2 = this._hora2;

        let hora3 = this._hora3;
        let hora4 = this._hora4;

        let hora5 = this._hora5;
        let hora6 = this._hora6;

        let resultado = (hora2 - hora1) + (hora4 - hora3) + (hora6 - hora5);

        return resultado;
    }

    //Getters and Setters
    get id() {
        return this._id;
    }
    get data_cadatro() {
        return new this._data_cadastro;
    }

    get hora1() {
        return this._hora1;
    }
    get hora2() {
        return this._hora2;
    }
    get hora3() {
        return this._hora3;
    }
    get hora4() {
        return this._hora4;
    }
    get hora5() {
        return this._hora5;
    }
    get hora6() {
        return this._hora6;
    }

    get total() {
        return this._total;
    }


    toString() {
        return {
            data_cadastro: this._data_cadastro,
            hora1: this._hora1,
            hora2: this._hora2,
            hora3: this._hora3,
            hora4: this._hora4,
            hora5: this._hora5,
            hora6: this._hora6,
            total: this._total
        }
    }

}

export default Ponto;