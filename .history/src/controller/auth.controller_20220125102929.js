const jwt = require("jsonwebtoken");
const {}
class authController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.response.body = `欢迎回来${name}`;
  }
}

module.exports = new authController();
