class labelController {
  async label(ctx, next) {
    const { label } = ctx.request.body;
    console.log(label);
  }
}

module.exports = new labelController();
