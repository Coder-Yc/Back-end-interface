const jwt = require("jsonwebtoken");

const errortype = require("../constans/error-types");
const service = require("../services/user.services");
const md5Password = require("../utils/handlePassword");
const { PUBLIC_KEY } = require("../app/config");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  //判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errortype.NAME_OR_PASSWORD_IS_REQUIED);
    return ctx.app.emit("error", error, ctx);
  }
  // 判断用户名是否存在
  const result = await service.getUserByname(name);
  if (result.length === 0) {
    const error = new Error(errortype.USER_DOES_NOT_ALREADY_EXITS);
    return ctx.app.emit("error", error, ctx);
  }
  //判断密码是否和数据库的密码是否一致
  const passwordHashString = result[0]["password"];
  const passwordUpload = md5Password(password);
  if (passwordHashString !== passwordUpload) {
    const error = new Error(errortype.PASSWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = result[0];

  await next();
};

const verifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  // 验证token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    ctx.body = result;
    console.log(result);
    await next();
  } catch (err) {
    const error = new Error(errortype.UNAUTHORIZATION);
    ctx.app.emit("error", error, ctx);
  }
};

const verifyPermission = async (ctx, next) => {
  const momentId = ctx.params.momentId;
  const userId = ctx.user.userId;
  console.log(momentId, userId);
};

module.exports = { verifyLogin, verifyAuth, verifyPermission };
