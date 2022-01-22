const connections = require("../app/database");

class Userservices {
  async create(user) {
    const { name, password } = user;
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    await connections.execute(
      statement,
      [name, password],
      (err, result, fields) => {
        if (err) {
          console.log("添加失败");
        } else {
          ctx.app.emit("create_user", result);
        }
      }
    );
  }

  async getUserByname(ctx, name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    await connections.execute(statement, [name], (err, result, fields) => {
      if (err) {
        console.log("查询失败");
      } else {
        ctx.app.emit("getUserByname", result);
      }
    });
  }
}

module.exports = new Userservices();
