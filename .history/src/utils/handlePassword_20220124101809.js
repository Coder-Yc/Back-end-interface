const crypto = require("crypto");
const md5Password = (password) => {
  const md5 = crypto.createHash(password);
  const password = md5.update;
};

module.exports = md5Password;
