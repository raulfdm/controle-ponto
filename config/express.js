var express = require('express')();
express.set('view engine', 'ejs');
express.set('views','./app/views'); //define o caminho

module.exports = function () {
    return express;
};