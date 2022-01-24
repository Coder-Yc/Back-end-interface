const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  //   判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error("");
    return ctx.app.emit("error", error, ctx);
  }
  // 判断用户名是否存在

  //   判断密码是否和数据库的密码是否一致
};

module.exports = verifyLogin;
