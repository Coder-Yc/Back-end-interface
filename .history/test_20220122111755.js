const mysql = require("mysql2");

async function test() {
  const c = mysql.createPool({
    port: 3306,
    database: ychub,
    user: root,
    password: 123123,
  });
}
