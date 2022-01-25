const Router = require("koa-router");
const momentRouter = new Router();

momentRouter.post("/moment", ver);

module.exports = momentRouter;
