const app = require("./app");
const config = require("./app/config");
app.listen(APP_PORT, () => {
  console.log("服务器启动成功");
});
