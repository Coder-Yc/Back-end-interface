const errortype = require("../constans/error-types");
const service = require("../services/user.services");

const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  if (!name || !password) {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }

  // 判断用户名是否存在
  const result = await service.getUserByname(name);
  // console.log(result);

  // await next();
};

module.exports = verifyuser;
