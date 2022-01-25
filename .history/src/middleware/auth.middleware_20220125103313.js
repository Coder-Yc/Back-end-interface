const errortype = require("../constans/error-types");
const service = require("../services/user.services");
const md5Password = require("../utils/handlePassword");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  //判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }
  // 判断用户名是否存在
  const result = await service.getUserByname(name);
  if (result.length === 0) {
    const error = new Error(errortype.USER_DOES_NOT_ALREADY_EXITS);
    return ctx.app.emit("error", error, ctx);
  }
  //判断密码是否和数据库的密码是否一致
  const passwordHashString = result[0]["password"];
  const passwordUpload = md5Password(password);
  if (passwordHashString !== passwordUpload) {
    const error = new Error(errortype.PASSWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = user;
  console.log(ctx.user);
  await next();
};

module.exports = verifyLogin;
