const errorType = require("../constans/error-types");

const errorHandle = (erroe, ctx) => {
  console.log(error.message);
  let status, 
  ctx.status = 404;
  ctx.body = "发生错误了";
};
