const errortype = require("../constans/error-types");
const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  //   console.log(name, password);
  if (!(!!name && !!password) || name === "" || password === "") {
    const error = new Error(errortype);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

module.exports = verifyuser;
