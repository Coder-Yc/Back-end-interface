const connections = require("../app/database");
class labelService {
  async createLabel(label) {
    const statement = "INSERT INTO `label` (name)  VALUES(?)";
    const [rows] = await connections.execute(statement, [label]);
    return rows;
  }

  async selectLabel(label) {
    const state = "SELECT * FROM comment WHERE id = 20";
  }
}
module.exports = new labelService();
