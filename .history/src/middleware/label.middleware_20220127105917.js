const labelServices = require("../services/label.services");
const momentServices = require("../services/moment.services");

const IsExistslabels = async (ctx, next) => {
  var { labels } = ctx.request.body;
  const { momentID } = ctx.params;
  for (const label of labels) {
    const result = await labelServices.selectLabel(label);
    if (result.length === 0) {
      console.log(labels);
      const { insertId } = await labelServices.createLabel(label);
      const result = await momentServices.momentLabel(momentID, insertId);
      ctx.body = result;
    } else {
      const insertId = this.result[0]["id"];
      console.log(labels);
      const result = await momentServices.momentLabel(momentID, insertId);
      console.log(result);
      ctx.body = result;
    }
  }
};

module.exports = IsExistslabels;
