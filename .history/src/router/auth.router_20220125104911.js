const Router = require("koa-router");
const { login, success } = require("../controller/auth.controller");
const  verifyLogin, verifyAuth  = require("../middleware/auth.middleware");

const authRouter = new Router({ prefix: "/login" });
authRouter.post("/", verifyLogin, login);
authRouter.post("/", verifyAuth, success);

module.exports = authRouter;
