function ProdutosDAO(connection) { //classe
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this.connection.query('select * from ponto', callback)
}


module.exports = function() {

    return ProdutosDAO;
}