const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

console.log(process.env.MYSQL_HOST);

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
