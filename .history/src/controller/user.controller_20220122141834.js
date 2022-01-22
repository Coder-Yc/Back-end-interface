const service = require("../services/user.services");
class UserConroller {
  async create(ctx, next) {
    //   获取用户请求传递的参数
    // console.log(ctx);
    const user = ctx.request.body;
    // 传递数据
    await service.create(ctx, user);
    const result = await ctx.app.once("createUser", (data) => {
      // 返回数据
      console.log("创建成功id:", data.insertId);
      ctx.response.body = data.insertId;
      ctx.app.removeAllListeners();
    });
  }
}
module.exports = new UserConroller();
