const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const [rows, fields] = await connections.execute(statement, [
      name,
      password,
    ]);
    return rows;
  }

  async getUserByname(name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    const [rows, fields] = await connections.execute(
      statement,
      [name],
      (result) => {
        console.log(result);
      }
    );
    console.log(rows);
    return fields;
  }
}

module.exports = new Userservices();
