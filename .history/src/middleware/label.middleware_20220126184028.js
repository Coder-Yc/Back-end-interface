const labelServices = require("../services/label.services");
const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  labels.forEach((lebel) => {
    const result = await service;
  });
};

module.exports = IsExistslabels;
