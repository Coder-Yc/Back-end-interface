const Router = require("koa-router");
const { IsExistslabels } = require("../middleware/label.middleware");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const {
  moment,
  momentID,
  list,
  update,
  Detele,
  addlabels,
} = require("../controller/moment.controller");
const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, moment);
momentRouter.get("/", list);
momentRouter.get("/:momentId", momentID);
momentRouter.patch("/:momentID", verifyAuth, verifyPermission, update);
momentRouter.delete("/:momentID", verifyAuth, verifyPermission, Detele);
momentRouter.post(
  "/:momentID/labels",
  verifyAuth,
  verifyPermission,
  IsExistslabels,
  addlabels
);

module.exports = momentRouter;