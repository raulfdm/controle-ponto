var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    //Ativando a engine EJS
    app.set('view engine', 'ejs');
    app.set('views', './app/views'); //define o caminho

    //Ativando o Middleware dos arquivos estáticos (CSS,JS,ETC)
    app.use(express.static('../client'));
    //Ativando o BodyParser(Middleware)
    app.use(bodyParser.urlencoded({
        extended: true //Permite enviar um form complexo
    })); //urlencoded é o formato que os dados são enviados por default
    app.use(bodyParser.json()); //Ativa o middleware de leitura de Json, caso o cliente o mande
    app.use(expressValidator()); //Ativa o middleware de validação

    //Carregando e exportando os modulos
    load('routes', {
            cwd: 'app' //pasta que o load deve procurar
        })
        .then('infra')
        .into(app);
    return app;
};