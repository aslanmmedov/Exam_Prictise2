const mongoose = require("mongoose");
const { Schema } = mongoose;

const shooseSchema = new Schema({
  name: String,
  description: String,
  imgUrl:String,
  price:Number,
},{versionKey: false,timeStamps:true});


const ShooseModel = mongoose.model("shoose", shooseSchema);

module.exports = ShooseModel;