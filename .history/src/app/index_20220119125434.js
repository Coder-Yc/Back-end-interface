const Koa = require("koa");

const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;
