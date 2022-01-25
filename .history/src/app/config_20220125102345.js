const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const PRIVSTE_KEY = fs.readFileSync(path.resolve(__dirname, ""))(
  (module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
  } =
    process.env)
);
