const Koa = require("koa");
const userRouter = require("../router/user.route");
const app = new Koa();
const bodyparser = require("koa-bodyparser");

app.use(bodyparser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.on("error", (error, ctx) => {
  console.log(ctx.message);
  ctx.statu;
});

module.exports = app;
