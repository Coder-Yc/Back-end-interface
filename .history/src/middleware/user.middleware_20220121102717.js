const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  if (!!name && !!password) {
    const error = new Error();
  }

  await next();
};

module.exports = verifyuser;
