const connection = require("../app/database");

class Userservices {
  async create(user) {
    // console.log(user);
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connection.execute(statement, [name, password]);

    return result;
  }
}

module.exports = new Userservices();
