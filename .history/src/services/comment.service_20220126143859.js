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

  async replyComment(content, moment_id, userID, commentID) {
    const statement =
      "INSERT INTO `comment` (content, moment_id, user_id, comment_id) VALUES(?,?,?,?)";
    const [rows] = await connections.execute(statement, [
      content,
      moment_id,
      userID,
      commentID,
    ]);
    return rows;
  }

  async updateComment(content, ID) {
    const statement = "UPDATE `comment` SET content = ? WHERE id = ?";
    const [rows] = await connections.execute(statement, [ID]);
  }
}
module.exports = new commentService();
