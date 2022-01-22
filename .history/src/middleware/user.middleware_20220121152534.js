// const { emit } = require("../app/database");
const errortype = require("../constans/error-types");
const service = require("../services/user.services");

const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;

  // console.log(result);
  //判断用户名密码
  //   console.log(name, password);
  if (!name || !password) {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }

  const result = await service.getUserByname(name);
  // console.log(result);
  // if (result.length) {
  //   const error = new Error(errortype.USER_ALREADY_EXITS);
  //   return ctx.app.emit("error", error, ctx);
  //   console.log("2");
  // }

  // await next();
};

module.exports = verifyuser;