const jwt = require("jsonwebtoken");
const { PRIVaTE_KEY, PUBLIC_KEY } = require("../app/config");
class authController {
  async login(ctx, next) {
    console.log(ctx.user);
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }PRIVSTE_KEY);

    ctx.response.body = `欢迎回来${name}`;
  }
}

module.exports = new authController();
