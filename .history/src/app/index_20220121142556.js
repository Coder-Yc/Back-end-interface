const Koa = require("koa");
const userRouter = require("../router/user.route");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const errorHandle = require("./error_handle");

app.use(bodyparser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// app.on("error", errorHandle);

module.exports = app;
