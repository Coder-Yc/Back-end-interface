const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { moment, momentID } = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, moment);
momentRouter.get("/", list);
momentRouter.get("/:momentId", momentID);
// momentRouter.get("/:momentId", DelmomentID);

module.exports = momentRouter;
