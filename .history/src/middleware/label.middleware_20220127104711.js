const labelServices = require("../services/label.services");
const momentServices = require("../services/moment.services");

const IsExistslabels = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const { momentID } = ctx.params;
  for (const label of labels) {
    const result = await labelServices.selectLabel(label);
    console.log(result);
    if (result.length === 0) {
      console.log("2222");
      const { insertId } = await labelServices.createLabel(label);
      const result = await momentServices.momentLabel(momentID, insertId);
      ctx.body = result;
    } else {
      console.log(result);
      const insertId = result[0]["id"];
      console.log(insertId);
      const result = await momentServices.momentLabel(momentID, insertId);
      console.log(result);
      ctx.body = result;
    }
  }
};

module.exports = IsExistslabels;
