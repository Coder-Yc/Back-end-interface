const Router = require("koa-router");
const { label } = require("../controller/auth.controller");
const { verifyAuth } = require("../middleware/auth.middleware");

const labelRouter = new Router();
labelRouter.post("/test", verifyAuth, label);

module.exports = labelRouter;
