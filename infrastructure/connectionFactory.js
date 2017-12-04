var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
        host: "localhost",
        //port: "3306",
        user: "root",
        password : "root",
        database: "testedb",
    });
};

module.exports = () => {
    return connectMYSQL;
}
