const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  if (!!name && !!password) {
    const error = new Error("用户名和密码不能为空");
    return ctx.app.emit(error, ctx);
  }

  await next();
};

module.exports = verifyuser;
