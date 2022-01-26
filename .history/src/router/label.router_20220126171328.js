const Router = require("koa-router");
const { label } = require("../controller/label.controller");
const { verifyAuth } = require("../middleware/auth.middleware");

const labelRouter = new Router({ prefix: "/label" });
labelRouter.post("/", verifyAuth, label);

module.exports = labelRouter;
