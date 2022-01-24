const Router = require("koa-router");

const authRouter = new Router({ prefix: "/login" });

authRouter.post();

module.exports = authRouter;
