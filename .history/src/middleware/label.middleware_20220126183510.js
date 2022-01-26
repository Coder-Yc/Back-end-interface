const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.requests.body;
  labels.forEach((lebel) => {
    const result = await;
  });
};

module.exports = IsExistslabels;
