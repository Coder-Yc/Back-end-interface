const connections = require("../app/database");

class momnetservices {
  async content(userId, content) {
    const statetement = "INSERT INTO `moment` (user_id, content) VALUES(?,? )";
    const [rows, fields] = await connections.execute(statetement, [
      userId,
      content,
    ]);
    return rows;
  }

  async getContentById(id) {}
}

module.exports = new momnetservices();
