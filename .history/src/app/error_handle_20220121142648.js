const errorType = require("../constans/error-types");

const errorHandle = (error, ctx) => {
  //   console.log(ctx);
  let status, message;
  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIED:
      message = "用户或者密码不能为空";
      status = 400; //bad requests
      break;
    case errorType.USER_ALREADY_EXITS:
      message = "用户已经存在";
      status = 409;
      break;
    default:
      message = "您所访问的资源找不到啦~";
      status = 404;
  }
  console.log(status, message);
  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandle;
