const crypto = require("crypto");
const md5Password = (password) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update("password").digest("hex");
  console.log(result);
  return result;
};

module.exports = md5Password;
