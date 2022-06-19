const mysql = require("mysql");
const database_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql_crud_api_db",
});

database_connection.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!");
});

module.exports = database_connection;