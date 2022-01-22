const verifyuser = (ctx, next) => {
  const { name, password } = await next();
};

module.exports = verifyuser;
