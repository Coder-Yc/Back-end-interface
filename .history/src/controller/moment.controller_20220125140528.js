class MomentController {
  async moment(ctx, next) {
    //拿到用户ID和内容
    const user_id = ctx.body.id;
    const content = ctx.request.body;
    // console.log(user_id, content);
  }
}
module.exports = new MomentController();
