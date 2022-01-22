const mysql = require("mysql2");

async function test() {
  const c = mysql.createPool({
    port: 3306,
    database: "ychub",
    user: "root",
    password: "123123",
  });
  console.log(await c.execute("select sleep(0.5)"));
}
test().then(() => {
  console.log("123");
});
