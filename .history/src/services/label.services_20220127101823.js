const connections = require("../app/database");
class labelService {
  async createLabel(label) {
    const statement = "INSERT INTO `label` (name)  VALUES(?)";
    const [rows] = await connections.execute(statement, [label]);
    return rows;
  }

  async selectLabel(label) {
    const statement = "SELECT * FROM label WHERE name = ?";
    const [rows] = await connections.execute(statement, [label]);
    console.log("111");
    console.log(rows);
    return rows;
  }
}
module.exports = new labelService();
