const mysql = require("mysql2");
const config = require("./config");
mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});
