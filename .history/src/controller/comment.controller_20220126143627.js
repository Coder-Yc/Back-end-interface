const service = require("../services/comment.service");
class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;
    const result = await service.comment(content, moment_id, userId);
    ctx.response.body = result;
  }

  async reply(ctx, next) {
    const { commentID } = ctx.params;
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;
    const result = await service.replyComment(
      content,
      moment_id,
      userId,
      commentID
    );
    ctx.body = result;
  }
  async update(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;
    const result = ctx.result;
    console.log(result);
    // const result = await service.updateComment(content, moment_id, userId);

    ctx.body = "更新成功";
  }
}

module.exports = new commentController();
