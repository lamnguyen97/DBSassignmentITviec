var mysql = require('mysql');
var connection = mysql.createConnection({
                  host     : 'localhost',
                  user     : 'root',
                  password : '',
                  database: 'Assignment2'
                });
module.exports = connection;