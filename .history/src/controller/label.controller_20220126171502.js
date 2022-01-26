class labelController {
  async label(ctx, next) {
    const { label } = ctx.body;
    console.log(label);
  }
}

module.exports = new labelController();
