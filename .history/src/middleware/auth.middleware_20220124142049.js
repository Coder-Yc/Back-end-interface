const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  //   判断用户名和密码是否为空

  // 判断用户名和密码
};

module.exports = verifyLogin;
