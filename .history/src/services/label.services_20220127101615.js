const connections = require("../app/database");
class labelService {
  async createLabel(label) {
    const statement = "INSERT INTO `label` (name)  VALUES(?)";
    const [rows] = await connections.execute(statement, [label]);
    return rows;
  }

  async selectLabel(label) {
    console.log("123");
    const statement = "SELECT * FROM label WHERE name = ?";
    const [rows] = await connections.execute(statement, [label]);
    return rows;
  }
}
module.exports = new labelService();
