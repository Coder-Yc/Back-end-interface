const { content } = require("../services/moment.services");
const service = require("../services/moment.services");
class MomentController {
  async moment(ctx, next) {
    //拿到用户ID和内容
    const userId = ctx.body.id;
    const content = ctx.request.body;

    // 把内容上传到服务器
    const result = await service.content(userId, content);
    ctx.response.body = result;
  }
  async momentID(ctx, next) {
    const momentId = ctx.params.momentId;
    const result = await service.getContentById(momentId);
    ctx.response.body = result;
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query;
    const result = await service.getContentList(offset, size);
    ctx.body = result;
  }

  async update(ctx, next) {
    const update_content = ctx.request.body;
    console.log(update_content);
    ctx.body = "更新成功";
  }

  async DelmomentID(ctx, next) {
    const momentId = ctx.params.momentId;
    const result = await service.delContentById(momentId);
    ctx.response.body = "删除成功";
  }
}
module.exports = new MomentController();
