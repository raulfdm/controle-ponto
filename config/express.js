var express = require('express')();
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    //Ativando a engine EJS
    express.set('view engine', 'ejs');
    express.set('views', './app/views'); //define o caminho

    //Ativando o BodyParser(Middleware)
    express.use(bodyParser.urlencoded({
        extended: true //Permite enviar um form complexo
    })); //urlencoded é o formato que os dados são enviados por default
    express.use(bodyParser.json()); //Ativa o middleware de leitura de Json, caso o cliente o mande
    express.use(expressValidator()); //Ativa o middleware de validação

    //Carregando e exportando os modulos
    load('routes', {
            cwd: 'app' //pasta que o load deve procurar
        })
        .then('infra')
        .into(express);
    return express;
};