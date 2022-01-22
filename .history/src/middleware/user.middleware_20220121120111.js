const errortype = require("../constans/error-types");
const { getUsername } = require("../services/user.services");
const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  //   console.log(name, password);
  if (!(!!name && !!password) || name === "" || password === "") {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }
  if (getUsername(name) !== 0) {
    console.log(name);
    console.log(getUsername(name));
  }
  await next();
};

module.exports = verifyuser;
