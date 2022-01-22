const errorType = require("../constans/error-types");

const errorHandle = (error, ctx) => {
  console.log(error.message);
  let status, message;
  switch(erroe.message) 
  ctx.status = 404;
  ctx.body = "发生错误了";
};
