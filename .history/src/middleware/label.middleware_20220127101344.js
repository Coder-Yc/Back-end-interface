const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  for (const label in labels) {
  }
};

module.exports = IsExistslabels;
