const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  console.log("123");
  for (const label in labels) {
    const result = await labelServices.selectLabel(label);
    console.log(result);
  }
};

module.exports = IsExistslabels;
