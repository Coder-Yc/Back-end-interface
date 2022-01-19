class UserConroller {
  async create(ctx, next) {
    console.log("创建用户成功");
  }
}
module.exports = new UserConroller();
