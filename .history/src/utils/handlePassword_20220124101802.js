const crypto = require("crypto");
const md5Password = (password) => {
    const md5 = crypto.createHash(password)
    const password = 
};

module.exports = md5Password;
