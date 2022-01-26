class commentController {
  async create(ctx, next) {
    const userId = ctx.body.id;
    console.log(userId);
    // const
  }
}

module.exports = new commentController();
