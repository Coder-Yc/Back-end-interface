class MomentController {
  async moment(ctx, next) {
    const user_id = ctx.body.id;
    const content = ctx.request.body;
  }
}
module.exports = new MomentController();
