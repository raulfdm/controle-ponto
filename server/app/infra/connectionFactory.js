var mysql = require('mysql');

module.exports = function() {
    return dataBase;
};

//wrapper
function dataBase() {
    process.env.NODE_ENV = 'prod';


    if (process.env.NODE_ENV == 'prod') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            //password: '123456',
            password: '',
            database: 'controledeponto'
        });
    }

    if (process.env.NODE_ENV == 'development') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            //password: '123456',
            password: '',
            database: 'controledepontoteste'
        });
    }
}