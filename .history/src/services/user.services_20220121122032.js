const connection = require("../app/database");

class Userservices {
  async create(user) {
    // console.log(user);
    const { name, password } = user;
    // console.log(name, password);
    // 创建用户密码
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connection.execute(statement, [name, password]);

    return result;
  }
  async getUsername(name) {
    console.log(statement);
    const statement = `SELECT * FROM users WHERE name = ?;`;
    console.log(name);
    const result = await connection.execute(statement, [name]);
    console.log(name);
    console.log(result);
    return result;
  }
}

module.exports = new Userservices();
