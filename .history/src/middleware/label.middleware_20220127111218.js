const labelServices = require("../services/label.services");
const momentServices = require("../services/moment.services");

const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const { momentID } = ctx.params;
  for (const label of labels) {
    const result = await labelServices.selectLabel(label);
    this.result = result;
    if (result.length === 0) {
      const { insertId } = await labelServices.createLabel(label);
      console.log(typeof insertId);
      const result = await momentServices.momentLabel(momentID, insertId);
      ctx.body = result;
    } else {
      const insertId = parseInt(this.result[0]["id"]);
      console.log(typeof insertId, typeof momentID);
      const result = await momentServices.momentLabel(momentID, insertId);
      console.log("123");
      ctx.body = result;
    }
  }
};

module.exports = IsExistslabels;
