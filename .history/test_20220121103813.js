const a = undefined;
const b = 123123;
if (!a && !b) {
  console.log("1111");
  const error = new Error("用户名和密码不能为空");
}
