class commentController {
  async create(ctx, next) {
    const userId = ctx.user.userId;
  }
}

module.exports = new commentController();
