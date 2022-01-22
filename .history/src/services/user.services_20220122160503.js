const connections = require("../app/database");

class Userservices {
  async create(ctx, user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const [rows, fields] = await connections.execute(statement, [
      name,
      password,
    ]);
    return rows;
  }

  async getUserByname(ctx, name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    await connections.execute(statement, [name]);
  }
}

module.exports = new Userservices();
