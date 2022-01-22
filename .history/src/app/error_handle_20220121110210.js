const errorType = require("../constans/error-types");

const errorHandle = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIED:
      message === "用户或者密码不能为空";
      status === 400;
  }
  ctx.status = 404;
  ctx.body = "发生错误了";
};
