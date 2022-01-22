const connection = require("../app/database");

class Userservices {
  async create(user) {
    // console.log(user);
    const { name, password } = user;
    // console.log(name, password);
    // 创建用户密码
    const statement = "INSERT INTO `users` (name, password) VALUES (?, ?);";
    const result = await connection.execute(statement, [name, password]);
    // 查询是否存在重复账号名
    const statement_ = 
    return result;
  }

}

module.exports = new Userservices();
