const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: { type: String, required: true },
  class :{type : String,required : true},
  ph :{type :Number,required :true}
});
module.exports = mongoose.model("students", StudentSchema);
