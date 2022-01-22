const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  console.log(name, password);
  if (!!name && !!password) {
    console.log("1");
    const error = new Error("用户名和密码不能为空");
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

module.exports = verifyuser;
