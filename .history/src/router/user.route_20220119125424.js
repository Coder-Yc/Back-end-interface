const userRouter = new Router({ prefix: "/users" });
userRouter.post("/", (ctx, next) => {
  ctx.body = "创建用户成功";
});