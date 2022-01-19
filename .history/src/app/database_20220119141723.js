const mysql = require("mysql2");
const config = require("./config");

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

connections.getConnection((err, con) => {
  if (err) {
    console.log("数据库连接失败");
  } else {
    console.log("数据库连接成功");
  }
});

module.exports = connections;
