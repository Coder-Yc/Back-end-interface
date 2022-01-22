const connections = require("../app/database");
const verifyuser = require("../middleware/user.middleware");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connections.execute(statement, [name, password]);
    return result;
  }

  async getUserByname(name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    await connections.execute(statement, [name], (err, result) => {
      if (!err) {
        verifyuser(result);
      }
    });
  }
}

module.exports = new Userservices();
