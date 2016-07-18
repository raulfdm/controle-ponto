
module.exports = function (app) {
    app.get('/ponto', function (req, res) {
        
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'controledeponto'        
        });
        

        connection.query('select * from ponto',function(erro, resultados){                        
            res.send(resultados);            

        });

        connection.end();

    })
}