class commentController {
  async create(ctx, next) {
    const userId = ctx.user;
    console.log(userId);
    // const
  }
}

module.exports = new commentController();
