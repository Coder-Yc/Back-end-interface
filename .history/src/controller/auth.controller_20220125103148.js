const jwt = require("jsonwebtoken");
const { PRIVSTE_KEY, PUBLIC_KEY } = require("../app/config");
class authController {
  async login(ctx, next) {
    console.log(ctx.user);
    const { id, name } = ctx.user;

    ctx.response.body = `欢迎回来${name}`;
  }
}

module.exports = new authController();
