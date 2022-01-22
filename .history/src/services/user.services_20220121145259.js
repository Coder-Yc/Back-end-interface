const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connections.execute(statement, [name, password]);
    // console.log(result);
    return result;
  }

  async getUserByname(name) {
    const results = [];
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    await connections.execute(statement, [name], (err, results, fields) => {
      console.log(results);
      results = results;
    });
    console.log(results);
  }
}

module.exports = new Userservices();
