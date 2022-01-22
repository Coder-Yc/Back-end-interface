const a = undefined;
const b = 123123;
if (!!name && !!password) {
  const error = new Error("用户名和密码不能为空");
  return ctx.app.emit("error", error, ctx);
}
