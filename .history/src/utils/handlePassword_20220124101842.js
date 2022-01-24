const crypto = require("crypto");
const md5Password = (password) => {
  const md5 = crypto.createHash(password);
  const password = md5.update(md5).digest("hex");
  return password;
};

module.exports = md5Password;
