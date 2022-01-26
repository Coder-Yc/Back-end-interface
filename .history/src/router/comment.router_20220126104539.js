const Router = require("koa-router");

const { verifyAuth } = require("../middleware/auth.middleware");
const {create}

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
