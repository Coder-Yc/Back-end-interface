const services = require("../services/label.services")
class labelController {
  async label(ctx, next) {
    const { label } = ctx.request.body;
    const result = await  
  }
}

module.exports = new labelController();
