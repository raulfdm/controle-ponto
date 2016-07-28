module.exports = function(app) {

    app.get('/ponto', function(req, res) {
        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection); //o new cria um novo contexto

        pontoDAO.lista(function(erro, resultados) {
            if (!erro) {
                //O format analisa que tipo de dados o cliente está pedindo
                res.format({
                    html: function() {
                       /* res.render('inicial', {
                            lista: resultados
                        });*/
                        res.json(resultados);
                    },
                    json: function() {
                        res.json(resultados);

                    }
                });

            } else {
                res.format({
                    html: function() {
                        res.send(res.status + 'p13: Erro ao consultar os dados');
                    },
                    json: function() {
                        console.log('U MAD, BRO?');
                        res.status(404).json({
                            erro: 'p13: Erro ao consultar os dados'
                        });
                    }
                })
            }
        });
        connection.end();
    });

    app.post('/ponto', function(req, res) {
        var ponto = req.body; //pega corpo da requisição

        //Express validator
        //Assert: REGRAS
        req.assert('data_cadastro', 'Data é obrigatória').notEmpty();
        req.assert('hora1', 'Horário 1 é obrigatório').notEmpty();
        req.assert('hora2', 'Horário 2 é obrigatório').notEmpty();
        req.assert('hora5', 'Horário 5 é obrigatório').notEmpty();
        req.assert('hora6', 'Horário 6 é obrigatório').notEmpty();


        var erros = req.validationErrors();

        if (erros) {
            res.format({
                html: function() {
                    res.status(400).render('cadastra-ponto', {
                        erros: erros,
                        ponto: ponto
                    });

                },
                json: function() {
                    res.status(400).json(erros);
                }
            })
            return;
        }

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


    app.get('/ponto/new', function(req, res) {
        res.render('cadastra-ponto', {
            erros: '',
            ponto: ''
        });
    });


}