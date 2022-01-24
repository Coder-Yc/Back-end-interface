const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
};

module.exports = verifyLogin;
