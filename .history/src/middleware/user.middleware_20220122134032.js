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

  await service.getUserByname(ctx, name);
  const result = ctx.app.on("data", (data) => {
    console.log(data);
    if(data.length ===)
  });
};

module.exports = verifyuser;