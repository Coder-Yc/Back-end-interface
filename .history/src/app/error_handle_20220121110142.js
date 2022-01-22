const errorType = require("../constans/error-types");

const errorHandle = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIED:
      message === "";
  }
  ctx.status = 404;
  ctx.body = "发生错误了";
};
