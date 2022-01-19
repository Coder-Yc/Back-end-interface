const connection = require("../app/database");

class Userservices {
  async create(user) {
    // console.log(user);
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    await connection.execute(statement);

    return "创建用户成功";
  }
}

module.exports = new Userservices();
