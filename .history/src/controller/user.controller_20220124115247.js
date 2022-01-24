const service = require("../services/user.services");
class UserConroller {
  create(ctx, next) {
    //   获取用户请求传递的参数
    // console.log(ctx);
    const user = ctx.request.body;
    // 传递数据
    const result = service.create(user);
    // console.log(result);
    ctx.body = result;
  }
}
module.exports = new UserConroller();
