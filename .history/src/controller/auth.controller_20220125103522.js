const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, PUBLIC_KEY } = require("../app/config");
class authController {
  async login(ctx, next) {
    console.log(ctx.user);
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY);

    ctx.response.body = `欢迎回来${name}`;
  }
}

module.exports = new authController();
