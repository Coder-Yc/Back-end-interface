const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, PUBLIC_KEY } = require("../app/config");
class authController {
  async login(ctx, next) {
    console.log(ctx.user);
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });

    ctx.response.body = {
      id,
      name,
      token,
    };
  }
  async success(ctx, next) {
    ctx.body = "验证成功";
  }
}

module.exports = new authController();
