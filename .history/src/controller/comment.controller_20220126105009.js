class commentController {
  async create(ctx, next) {
    ctx.body = "评论成功";
  }
}

module.exports = new commentController();
