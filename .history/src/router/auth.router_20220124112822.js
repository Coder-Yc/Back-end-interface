const Router = require("koa-router");
const { login } = require("../controller/auth.controller");
const authRouter = new Router({ prefix: "/login" });

authRouter.post("/login", login);

module.exports = authRouter;
