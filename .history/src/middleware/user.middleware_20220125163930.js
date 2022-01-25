const errortype = require("../constans/error-types");
const service = require("../services/user.services");
const md5Password = require("../utils/handlePassword");
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
  if (result.length === 1) {
    const error = new Error(errortype.USER_ALREADY_EXITS);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};

const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

module.exports = { verifyuser, handlePassword };
