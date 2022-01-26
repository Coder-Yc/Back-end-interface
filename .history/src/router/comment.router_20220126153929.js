const Router = require("koa-router");

const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");
const {
  create,
  reply,
  update,
  Delete,
} = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.post("/:commentID", verifyAuth, reply);
commentRouter.patch("/:commentID", verifyAuth, verifyPermission, update);
commentRouter.delete("/:commentID", verifyAuth, verifyPermission, Delete);
commentRouter.get("/", select);

module.exports = commentRouter;
