const services = require("../services/label.services");
class labelController {
  async label(ctx, next) {
    const { label } = ctx.request.body;
    const result = await services.createLabel(label);
  }
}

module.exports = new labelController();
