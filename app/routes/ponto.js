module.exports = function(app) {
    app.get('/ponto', function(req, res) {
        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection); //o new cria um novo contexto

        pontoDAO.lista(function(erro, resultados) {

            res.render('inicial', {
                lista: resultados
            });
        });
        connection.end();
    });

    app.get('/ponto/new', function(req, res) {

        res.render('cadastra-ponto');
    });

    app.post('/ponto', function(req, res) {
        var ponto = req.body; //pega corpo da requisição

        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection); //o new cria um novo contexto

        pontoDAO.insere(ponto, function(erro, resultado) {
            if (!erro) {
                res.redirect('/ponto'); //always redirect after post!
            } else {
                res.send(erro);
            }
        });
        connection.end();
    });
}