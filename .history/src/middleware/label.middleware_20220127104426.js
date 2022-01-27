const labelServices = require("../services/label.services");
const momentServices = require("../services/moment.services");

const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const { momentID } = ctx.params;
  for (const label of labels) {
    const result = await labelServices.selectLabel(label);
    if (result.length === 0) {
      const { insertId } = await labelServices.createLabel(label);
      const result = await momentServices.momentLabel(momentID, insertId);
      ctx.body = result;
    } else {
      const insertId = result[0]["id"];
      const result = await momentServices.momentLabel(momentID, insertId);
      console.log(result);
      ctx.body = result;
    }
  }
};

module.exports = IsExistslabels;
