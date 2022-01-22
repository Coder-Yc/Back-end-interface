const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  console.log(name, password);
  if (!(!!name && !!password) || name === "" || password === "") {
    const error = new Error("用户名和密码不能为空");
    console.log(error);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

module.exports = verifyuser;
