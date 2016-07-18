var express = require('express')();
var load = require('express-load');


express.set('view engine', 'ejs');
express.set('views', './app/views'); //define o caminho

load('routes', {
        cwd: 'app' //pasta que o load deve procurar
    })
    .then('infra')
    .into(express);

module.exports = function() {
    return express;
};