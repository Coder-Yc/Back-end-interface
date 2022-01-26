class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    const { content, moment_id } = ctx.request.body;
    console.log(content, moment_id);
  }
}

module.exports = new commentController();
