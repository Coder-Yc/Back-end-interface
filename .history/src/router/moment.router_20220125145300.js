const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { moment, momentID } = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, moment);
momentRouter.get("/:momentId", SelmomentID);
momentRouter.get("/:momentId", DelmomentID);

module.exports = momentRouter;
