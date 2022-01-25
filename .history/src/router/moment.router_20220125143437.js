const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { moment } = require("../controller/moment.controller");
const momentRouter = new Router();

momentRouter.post("/moment", verifyAuth, moment);
momentRouter.get("/:momentId");

module.exports = momentRouter;
