class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;

    const result = await service.comment(content, moment_id.userId);
  }
}

module.exports = new commentController();
