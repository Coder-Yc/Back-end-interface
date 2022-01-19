const dotenv = require("dotenv");

dotenv.config();

console.log(process.dotenv.APP_PORT);

module.exports = { APP_PORT } = process.env;
