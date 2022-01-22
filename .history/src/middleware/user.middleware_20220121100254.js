const verifyuser = (ctx, next) => {
    const {name, password} = ctx.
  await next();
};

module.exports = verifyuser;
