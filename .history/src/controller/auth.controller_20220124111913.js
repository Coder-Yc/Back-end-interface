class authController {
  login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.response.body = `欢迎回来${name}`;
  }
}
