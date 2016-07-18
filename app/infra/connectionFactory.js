var mysql = require('mysql');

module.exports = function() {
    return dataBase;
};

//wrapper
function dataBase() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'controledeponto'
    });
}