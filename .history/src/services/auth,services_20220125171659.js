const connections = require("../app/database");
class Authservice {
  async checkMomment(momentId) {
    const statement = "SELECT user_id FROM moment WHERE id = ?";
    const [rows] = connections.execute(statement, [momentId]);
    return rows;
  }
}

module.exports = new Authservice();
