module.exports = function (app) {

    app.get('/ponto', function (req, res) {
        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection); //o new cria um novo contexto

        pontoDAO.lista(function (erro, resultados) {
            let msg;
            console.log(resultados);
            if (!erro) {
                if (!resultados[0]) {
                     msg = 'Não há dados para importar';
                    res.format({
                        html: function () {
                            res.status(404).send(msg);
                        },
                        json: function () {
                            res.status(404).send(msg);
                        }
                    })
                } else {                    
                    //O format analisa que tipo de dados o cliente está pedindo
                    res.format({
                        html: function () {
                            res.json(resultados);
                        },
                        json: function () {
                            res.json(resultados);
                        }
                    });
                }


            } else {
                msg = 'Erro ao acessar o banco de dados dados';
                res.format({
                    html: function () {
                        res.status(404).send(msg);
                    },
                    json: function () {
                        res.status(404).send(msg);
                    }
                })
            }
        });
        connection.end();
    });

    app.post('/ponto', function (req, res) {        
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
                html: function () {
                    res.status(400).json(erros);

                },
                json: function () {
                    res.status(400).json(erros);
                }
            })
            return;
        }

        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection); //o new cria um novo contexto

        pontoDAO.insere(ponto, function (erro, resultado) {
            if (!erro) {
                res.status(200).send('Ponto cadastrado com sucesso!');
            } else {
                //console.log(erro);
                res.status(400).send(erro);
            }
        });
        connection.end();
    });


    //Rota provisória para truncar a tabela
    app.get('/deleteall', function (req, res) {

        var connection = app.infra.connectionFactory();
        var pontoDAO = new app.infra.pontoDAO(connection);

        pontoDAO.deleteAll(function(erro, resultado){
            console.log(erro, resultado);
            if(erro){
                console.log(erro);
                res.send('Erro');
            }else{
                res.send('Pontos dropados');
            }
            
        })

    });

}