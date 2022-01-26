const Koa = require("koa");
const app = new Koa();
const bodyparser = require("koa-bodyparser");
const errorHandle = require("./error_handle");

const userRouter = require("../router/user.route");
const authRouter = require("../router/auth.router");
const momentRouter = require("../router/moment.router");
const commentRouter = require("../router/comment.router");

app.use(bodyparser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.use(momentRouter.routes());
app.use(momentRouter.allowedMethods());

app.use(commentRouter.routes());
app.use(commentRouter.allowedMethods());

app.use(labelRouter.routes);

app.on("error", errorHandle);

module.exports = app;
