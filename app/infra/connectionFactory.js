var mysql = require('mysql');

module.exports = function() {
    return dataBase;
};

//wrapper
function dataBase() {

    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            //password: '',
            database: 'controledeponto'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            //password: '',
            database: 'controledepontoteste'
        });
    }
}