var http = require('http');
var assert = require('assert'); //biblioteca do node que faz os testes


//descrição dos testes
//conveção: colocar # para definir o que é nosso.
describe('#PontoController', function() {
    //teste listagem json
    it('#listagem json', function(done) {
        //configurações de conexão
        var config = {
            method: 'GET',
            host: 'localhost',
            port: 3000,
            path: '/ponto',
            headers: {
                'Accept': 'application/json'
            }
        };


        http.get(config, function(res) {
            /*
            Para validar, usar o assert com a seguinte máscara:
            assert.equals(o que eu quero comparar, o que eu quero receber);
            */

            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            //Quando chamamos a função de finalização, indicamos ao mocha que ele pode concluir o teste
            done();

        })


    });
});