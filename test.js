const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log("1");
  await next(); // 调用下一个middleware
  console.log("5");
});
app.use(async (ctx, next) => {
  console.log("2");
  await next(); // 调用下一个middleware
  console.log("4");
});
app.use(async (ctx, next) => {
  console.log("3");
});

app.listen(3000);
console.log("listening on port 3000");
