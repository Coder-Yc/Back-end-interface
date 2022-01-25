const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const momet = require("../controller/moment.controller");
const momentRouter = new Router();

momentRouter.post("/moment", verifyAuth, moment);

module.exports = momentRouter;
