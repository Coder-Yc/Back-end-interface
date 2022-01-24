const errortype = require("../constans/error-types");
const service = require("../services/user.services");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  //判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }
  // 判断用户名是否存在
  const result = await service.getUserByname(name);
  console.log(result);
  //判断密码是否和数据库的密码是否一致
};

module.exports = verifyLogin;
