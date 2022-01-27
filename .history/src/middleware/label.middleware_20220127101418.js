const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  for (const label in labels) {
    const result = await labelServices.selectLabel(label);
  }
};

module.exports = IsExistslabels;
