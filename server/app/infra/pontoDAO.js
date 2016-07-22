function PontoDAO(connection) { //classe
    this._connection = connection;
}

//Definindo a propriedade lista no objeto PontoDAO
PontoDAO.prototype.lista = function(callback) {
    this._connection.query('select * from ponto', callback);
}

PontoDAO.prototype.insere = function(ponto, callback) {
    this._connection.query('insert into ponto set ? ', ponto, callback);
}

module.exports = function() {

    return PontoDAO;
}