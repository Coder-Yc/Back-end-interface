const connections = require("../app/database");

class momnetservices {
  async content(userId, content) {
    const stattement = "INSERT INTO `moment` (user_id, content) VALUES(?,? )";

    return result;
  }
}

module.exports = new momnetservices();
