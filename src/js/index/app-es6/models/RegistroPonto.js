class RegistroPonto {

    constructor(dataRegistro, id = '') {        
        this._id = id;                
        this._data_registro = moment(dataRegistro).format();
        Object.freeze(this);
    }

    //Getters and Setters
    get id() {
        return this._id;
    }
    get data_registro() {
        return this._data_registro;
    }

    toString() {
        return { 
            id_ponto: this._id,
            data_registro: moment(this._data_registro).format()
        }
    }

}

export default RegistroPonto;