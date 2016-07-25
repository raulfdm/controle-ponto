//Define o que é um Ponto

class Ponto {

    constructor(data, hora1, hora2, hora3, hora4, hora5, hora6) {
        if (!data) {
            data = new Date();
        }
        this._data_cadastro = new Date(data.getTime());

        this._hora1 = hora1;
        this._hora2 = hora2;
        this._hora3 = hora3;
        this._hora4 = hora4;
        this._hora5 = hora5;
        this._hora6 = hora6;

        this._total = this._getTotal();
        this._banco = "00:00";

        Object.freeze(this);
    }

    //gets
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

    get banco() {
        return this._banco;
    }

    _getTotal(timeObj) {
        let hora1 = getMilissegundos(this._hora1);
        let hora2 = getMilissegundos(this._hora2);

        let hora3 = getMilissegundos(this._hora3);
        let hora4 = getMilissegundos(this._hora4);

        let hora5 = getMilissegundos(this._hora5);
        let hora6 = getMilissegundos(this._hora6);

        let total = (hora2 - hora1) + (hora4 - hora3) + (hora6 - hora5);
        return getHoraString(total);
    }

}