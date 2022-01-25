const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const {
  moment,
  momentID,
  list,
  DelmomentID,
} = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, moment);
momentRouter.get("/", list);
momentRouter.get("/:momentId", momentID);
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, DelmomentID);

module.exports = momentRouter;
