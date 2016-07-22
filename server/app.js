var app = require('./config/express.js')();
var porta = 3000;

app.listen(porta, function() {
    console.log('Rodando na porta: ' + porta);
});