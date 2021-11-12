const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderRecordSchema = new Schema({
  id: { type: Number, required: true },
  amount: { type: Number, required: true },
  size: { type: String, required: true },
  method: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true },
  flagged: { type: Boolean, required: true },
});

const orderRecord = mongoose.model("Record", orderRecordSchema);

module.exports = orderRecord;
