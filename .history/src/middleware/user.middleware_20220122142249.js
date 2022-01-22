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
  await service.getUserByname(ctx, name);
  const result = await ctx.app.on("getUserByname", (data) => {
    // console.log(data);
    if (data.length === 1) {
      const error = new Error(errortype.USER_ALREADY_EXITS);
      ctx.app.emit("error", error, ctx);
    }
  });
  ctx.app.re;
  await next();
};

module.exports = verifyuser;
