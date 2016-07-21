var express = require('../config/express')();
var request = require('supertest')(express);

//descrição dos testes
//conveção: colocar # para definir o que é nosso.
describe('#PontoController', function() {    
    //Após cada teste, ele executa a limpera do ponto!
    //OBS: quando for implementar testes mais complexos, usar a lib: node-database-cleaner
    afterEach(function(done) {
        var conn = express.infra.connectionFactory();
        conn.query('delete from ponto', function(erros, resultado) {
            if (!erros) {
                done();
            };
        });
    });


    it('#listagem de pontos json', function(done) {

        request.get('/ponto') //passa a URL
            .set('Accept', 'application/json') //Define o Accept da requisição
            //.set('Accept','text/html') //Define o Accept da requisição
            .expect('Content-Type', /json/) //Define que espera encontrar (/ / -> expressão regular) um json no headers
            //.expect('Content-Type',/html/)//Define que espera encontrar (/ / -> expressão regular) um html no headers
            .expect(200, done); //Diz o que você espera        
    });

    it('#cadastra produto com dados inválidos', function(done) {
        request.post('/ponto')
            .send({ //envia ponto inválido
                data_cadastro: '',
                hora1: '',
                hora2: '',
                hora3: '',
                hora4: '',
                hora5: '',
                hora6: ''
            })
            .expect(400, done); //espera receber erro 400
    });

    it('#cadastra produto com dados Válidos', function(done) {
        request.post('/ponto')
            .send({ //envia ponto inválido
                data_cadastro: '2016/06/30',
                hora1: '08:00',
                hora2: '12:00',
                hora3: '',
                hora4: '',
                hora5: '13:00',
                hora6: '17:00'
            })
            .expect(302, done); //espera receber erro 302 (redirect)
    });


});