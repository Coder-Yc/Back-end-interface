const crypto = require("crypto");
const md5Password = (password) => {
  console.log(password);
  const md5 = crypto.createHash(password);
  const result = md5.update(md5).digest("hex");
  console.log(result);
  return result;
};

module.exports = md5Password;
