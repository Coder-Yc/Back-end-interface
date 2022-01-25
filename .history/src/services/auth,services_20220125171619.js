const connections = require("../app/database");
class Authservice {
  async checkMomment(momentId) {
    const statement = "SELECT user_id FROM moment WHERE id = ?";
  }
}

module.exports = new Authservice();
