class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.body;
  }
}

module.exports = new commentController();
