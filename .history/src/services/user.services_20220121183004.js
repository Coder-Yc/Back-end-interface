const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connections.execute(statement, [name, password]);
    return result;
  }

  async getUserByname(name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    connections
      .promise()
      .execute(statement, [name])
      .then(([result, fields]) => {
        console.log(result);
        const a = result;
        console.log(a);
      });

    // console.log(a);
  }
}

module.exports = new Userservices();
