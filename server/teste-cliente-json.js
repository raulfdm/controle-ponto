var http = require('http');

var config = {
    host: 'localhost',
    port: 3000,
    path: '/ponto',
    //method: 'post', //Ativar se o método for POST
    headers: {
        'Accept': 'application/json' //Formato que o cliente prefere - CONTENT NEGOTIATION
        //'Accept':'text/html'
        //'Content-type': 'application/json' //Caso seja POST, podemos informar o formato que enviaremos
    }
};

http.get(config, function(res){
    //imprime o status da resposta
    console.log(res.statusCode);
    //response do node
    //quando os dados da requisição estiverem prontos, imprime o corpo da req
    res.on('data', function(body){
        console.log('Corpo:'+body);
    })
})