var app = require('./config/express.js')();
var rotasPonto = require('./app/routes/ponto')(app);
var porta = 3000;

app.listen(porta,function(){
    console.log('Rodando na porta: '+porta);
});