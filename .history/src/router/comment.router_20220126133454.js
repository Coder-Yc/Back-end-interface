const Router = require("koa-router");

const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const { create, reply } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.post("/:commentID", verifyAuth, reply);
commentRouter.patch("/:commengID", verifyAuth, verifyPermission);

module.exports = commentRouter;
