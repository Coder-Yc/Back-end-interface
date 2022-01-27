const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.request.body;
  for (const label of labels) {
    const result = await labelServices.selectLabel(label);
    if (result.length === 0) {
      const { insertId } = await labelServices.createLabel(label);
    }
  }
};

module.exports = IsExistslabels;
