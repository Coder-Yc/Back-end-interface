class labelController {
  async label(ctx, next) {
    const { label } = ctx.body;
  }
}

module.exports = new labelController();
