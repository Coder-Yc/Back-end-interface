const Router = require("koa-router");
// const { login, success } = require("../controller/auth.controller");
// const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");

const labelRouter = new Router();
labelRouter.get("/test", verifyAuth, success);

module.exports = labelRouter;
