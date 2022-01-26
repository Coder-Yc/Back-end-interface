class commentController {
  async create(ctx, next) {
    const userId = ctx.body;
    console.log(userId);
    // const
  }
}

module.exports = new commentController();
