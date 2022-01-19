const service = require("../services/user.services");
class UserConroller {
  async create(ctx, next) {
    //   获取用户请求传递的参数

    // 传递数据
    const result = await service.create();
    // 返回数据
  }
}
module.exports = new UserConroller();
