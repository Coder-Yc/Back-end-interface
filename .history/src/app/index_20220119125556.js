const Koa = require("koa");
const userRouter = require("../router/user.route");
const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;
