const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connections.execute(statement, [name, password]);
    return result;
  }

  async getUserByname(name) {
    const a = [];
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    connections
      .promise()
      .execute(statement, [name])
      .then(([result, fields]) => {
        console.log(result);
        this.a = result;
        console.log(a);
      });

    console.log(a);
  }
}

module.exports = new Userservices();
