function PontoDAO(connection) { //classe
    this._connection = connection;
}

//Definindo a propriedade lista no objeto PontoDAO
PontoDAO.prototype.lista = function(callback) {
    this._connection.query(`select p.id 'id', p.hora1 'hora1',p.hora2,p.hora3, p.hora4, p.hora5,
        p.hora6, p.total, DATE_FORMAT(p.data_cadastro,'%Y-%m-%d') 
        as 'data_cadastro' from ponto p`, callback);

}

PontoDAO.prototype.insere = function(ponto, callback) {
    console.log(ponto);
    this._connection.query('insert into ponto set ? ', ponto, callback);
}

//Método provisório para truncar a tabela
PontoDAO.prototype.deleteAll = function(callback){
    this._connection.query('truncate table ponto',callback);
}

module.exports = function() {

    return PontoDAO;
}