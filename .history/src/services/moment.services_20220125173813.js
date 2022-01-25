const connections = require("../app/database");

class momnetservices {
  async content(userId, content) {
    const statetement = "INSERT INTO `moment` (user_id, content) VALUES(?,? )";
    const [rows] = await connections.execute(statetement, [userId, content]);
    return rows;
  }

  async getContentById(id) {
    const statement = `SELECT m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
     JSON_OBJECT('id', u.id, 'name', u.name) user FROM moment m 
     LEFT JOIN users u ON m.user_id = u.id WHERE m.id = ?`;
    const [rows] = await connections.execute(statement, [id]);
    return rows;
  }

  async getContentList(offset, size) {
    const statement = `SELECT m.id id, m.content content, m.createAt createTime, m.updateAt updateTime, 
    JSON_OBJECT('id', u.id, 'name', u.name) user FROM moment m 
    LEFT JOIN users u ON m.user_id = u.id LIMIT ?,?`;

    const [rows] = await connections.execute(statement, [offset, size]);
    return rows;
  }

  async updateContent(content, id) {}

  async delContentById(id) {
    const statement = "DELETE FROM moment WHERE id = ?";
    const [rows] = await connections.execute(statement, [id]);
  }
}

module.exports = new momnetservices();
