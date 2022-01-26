class labelController {
  async label(ctx, next) {
    ctx.body = "创建标签成功";
  }
}

module.exports = new labelController();
