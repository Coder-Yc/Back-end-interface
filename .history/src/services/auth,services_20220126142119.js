const connections = require("../app/database");
class Authservice {
  async checkMomment(NeedID, NeedName) {
    const statement = "SELECT user_id FROM moment WHERE id = ?";
    const [rows] = await connections.execute(statement, [momentId]);
    return rows;
  }
}

module.exports = new Authservice();
