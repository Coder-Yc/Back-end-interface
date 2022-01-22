const verifyuser = (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //
  await next();
};

module.exports = verifyuser;
