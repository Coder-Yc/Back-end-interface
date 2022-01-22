const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connections.execute(statement, [name, password]);

    return result;
  }

  async getUsername() {
    // console.log(name);
    const statement = "SELECT * FROM `users` WHERE name = '8';";
    const result = await connections.execute(statement);

    return result;
  }
}

module.exports = new Userservices();
