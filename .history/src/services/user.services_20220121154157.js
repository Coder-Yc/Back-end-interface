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
    let results = [];
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    await connections.execute(statement, [name],async (err, result, fields) => {
      console.log(result);
      await results = result;
    });
    console.log(results);
  }
}

module.exports = new Userservices();
