const jwt = require("jsonwebtoken");
const {PRIVSTE_KEY, PUBLIC_KEY}
class authController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.response.body = `欢迎回来${name}`;
  }
}

module.exports = new authController();
