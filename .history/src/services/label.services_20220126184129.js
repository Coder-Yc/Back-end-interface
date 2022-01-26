const connections = require("../app/database");
class labelService {
  async createLabel(label) {
    const statement = "INSERT INTO `label` (name)  VALUES(?)";
    const [rows] = await connections.execute(statement, [label]);
    return rows;
  }

  async selectLabel(label) {
    const state = "";
  }
}
module.exports = new labelService();
