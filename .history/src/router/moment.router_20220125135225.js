const Router = require("koa-router");
const verifyAuth = require("../middleware/auth.middleware");
const momentRouter = new Router();

momentRouter.post("/moment", ver);

module.exports = momentRouter;
