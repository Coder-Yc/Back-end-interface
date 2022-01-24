const Koa = require("koa");
const userRouter = require("../router/user.route");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const errorHandle = require("./error_handle");
const authRouter = require("../router/auth.router");

app.use(bodyparser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.on("error", errorHandle);

module.exports = app;
