const Router = require("koa-router");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const {
  moment,
  momentID,
  list,
  update,
} = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, moment);
momentRouter.get("/", list);
momentRouter.get("/:momentId", momentID);
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);
momentRouter.delete("/:momentId", verifyAuth, verifyPermission, Detele);

module.exports = momentRouter;
