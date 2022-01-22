const verifyuser = (ctx, next) => {
  //
  const { name, password } = ctx.request.body;
  await next();
};

module.exports = verifyuser;
