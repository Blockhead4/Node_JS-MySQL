var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mysql_tutorial"
});
db.connect();
module.exports = db;
