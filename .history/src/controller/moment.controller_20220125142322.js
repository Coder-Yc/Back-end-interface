const service = require("../services/moment.services");
class MomentController {
  async moment(ctx, next) {
    //拿到用户ID和内容
    const userId = ctx.body.id;
    const content = ctx.request.body;
    console.log(user_id, content);

    // 把内容上传到服务器
    const result = await service.content(userId, content);
    console.log(result);
  }
}
module.exports = new MomentController();
