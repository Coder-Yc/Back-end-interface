const connections = require("../app/database");

class momnetservices {
  async content(userId, content) {
    const statetement = "INSERT INTO `moment` (user_id, content) VALUES(?,? )";
    const [rows] = await connections.execute(statetement, [userId, content]);
    return rows;
  }

  async getContentById(id) {
    const statement = "2";
    const [rows] = await connections.execute(statement, [id]);
    return rows;
  }
}

module.exports = new momnetservices();
