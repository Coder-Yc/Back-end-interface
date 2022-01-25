const Router = require("koa-router");
const momentRouter = new Router();

momentRouter.post("/moment");

module.exports = momentRouter;
