class RegistroPonto {

    constructor(dataRegistro,idUsuario,id = '') {
        this._id = id;
        this._dataRegistro = dataRegistro;        
        this._idUsuario = idUsuario;        
        Object.freeze(this);
    }

    //Getters and Setters
    get id() {
        return this._id;
    }
    get data_cadatro() {
        return new this._dataRegistro;
    }

    get idUsuario(){
        return this._idUsuario;
    }
   
    toString() {
        return {
            id_ponto: this._id,
            id_usuario: this._idUsuario,
            data_registro: moment(this._dataRegistro).format()                      
        }
    }

}

export default RegistroPonto;