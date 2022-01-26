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
    const [rows] = await connections.execute(statement, [content, ID]);
    return rows;
  }

  async DeleteComment(ID) {
    const statement = "DELETE FROM comment WHERE id = ?";
    const [rows] = await connections.execute(statement, [ID]);
    return rows;
  }

  async SelectComment(moment) {
    const statement =
      "SELECT m.id, m.comment_id commentId, m.createAT createTime, JSON_OBJECT('id', u.id, 'name', u.name) user FROM `comment` m LEFT JOIN users u ON u.id = m.user_id WHERE moment_id = ?";
    const [rows] = await connections.execute(statement, [moment]);
    return rows;
  }
}
module.exports = new commentService();
