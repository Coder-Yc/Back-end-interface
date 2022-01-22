const Router = require("koa-router");
const { create } = require("../controller/user.controller.js");
const userRouter = new Router({ prefix: "/users" });

userRouter.post("/",verify create);

module.exports = userRouter;
