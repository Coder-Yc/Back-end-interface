const connections = require("../app/database");
class labelService {
  async createLabel(label) {
    const statement = "INSERT INTO `label` (name)  VALUES(?)";
    const [rows] = connections.execute(statement, [label]);
    return rows;
  }
}
module.exports = new labelService();
