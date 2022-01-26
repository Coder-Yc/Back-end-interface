const connections = require("../app/database");
class commentService {
  async comment(content, moment_id, userID) {
    const statement =
      "INSERT INTO `comment` (content, moment_id, user_id) VALUES(?,?,?)";
    const [rows] = await connections.execute(statement, [
      content,
      moment_id,
      userID,
    ]);
    return rows;
  }
}
module.exports = new commentService();
