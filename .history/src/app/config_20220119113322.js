const dotenv = require("dotenv");

dotenv.config();

console.log(process.env);

module.exports = { APP_PORT } = process.env;
