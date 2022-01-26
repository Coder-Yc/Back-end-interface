class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;

    const result = await ser;
  }
}

module.exports = new commentController();
