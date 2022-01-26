const connections = require("../app/database");
class Authservice {
  async checkMomment(NeedID, NeedName) {
    const statement = `SELECT id, user_id FROM ${NeedName} WHERE id = ?`;
    const [rows] = await connections.execute(statement, [NeedID]);
    return rows;
  }
}

module.exports = new Authservice();
