const verifyuser = async (ctx, next) => {
  //获取用户名密码
  const { name, password } = ctx.request.body;
  //判断用户名密码
  console.log(!name);
  // if (！name )
  await next();
};

module.exports = verifyuser;
