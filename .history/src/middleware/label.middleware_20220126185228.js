const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  labels.forEach(async (lebel) => {
    const result = await labelServices.selectLabel(lebel);
    console.log(result);
  });
};

module.exports = IsExistslabels;
