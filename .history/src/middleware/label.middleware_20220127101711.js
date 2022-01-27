const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.request.body;
  for (const label in labels) {
    const result = await labelServices.selectLabel(label);
    console.log(result);
  }
};

module.exports = IsExistslabels;
