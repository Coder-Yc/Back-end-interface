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
  async getUsername(user) {
    const { name, password } = user;
    statement = "SELECT * FROM users WHERE name = 'coderYc'";
    const result = await connection.execute(statement);
  }
}

module.exports = new Userservices();
