const service = require("../services/user.services");
class UserConroller {
  async create(ctx, next) {
    //   获取用户请求传递的参数
    // console.log(ctx);
    const user = ctx.request.body;
    // 传递数据
    await service.create(user);

    // 返回数据
    ctx.body = result;
  }
}
module.exports = new UserConroller();
