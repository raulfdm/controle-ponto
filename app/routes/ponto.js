module.exports = function(app) {
    app.get('/ponto', function(req, res) {


        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection); //o new cria um novo contexto

        produtosDAO.lista(function(erro, resultados) {

            res.render('inicial', {
                lista: resultados
            });

        });

        connection.end();

    })
}