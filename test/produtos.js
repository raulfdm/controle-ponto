var http = require('http');




//descrição dos testes
//conveção: colocar # para definir o que é nosso.
describe('#PontoController',function(){
    //teste listagem json
    it('#listagem json',function(done){
        //configurações de conexão
        var config = {
            hostname: 'localhost',
            port: 3000,
            path: '/ponto',
            headers: {
                'Accept':'application/json'
            }
        };
        

        http.get(config, function(res){
            if(res.statusCode == 200){
                console.log('#Status 200! OK')
            }
            if(res.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log('#content OK')
            }

            //Quando chamamos a função de finalização, indicamos ao mocha que ele pode concluir o teste
            done();
        })


    });
});