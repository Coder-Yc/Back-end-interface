const connections = require("../app/database");

class momnetservices {
  async content(userId, content) {
    const statetement = "INSERT INTO `moment` (user_id, content) VALUES(?,? )";
    const [rows, fields] = connections.execute(statetement, [userId, content]);

    return rows;
  }
}

module.exports = new momnetservices();
