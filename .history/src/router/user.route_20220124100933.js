const Router = require("koa-router");
const { create, handlePassword } = require("../controller/user.controller.js");
const verifyuser = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/users" });

userRouter.post("/", verifyuser, handlePassword, create);

module.exports = userRouter;
