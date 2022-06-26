const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Student = new Schema({
  first_name: String,
  last_name: String,
  age: String,
  collage: String,
  email: String,
},{timestamps:true});

module.exports = mongoose.model("Student", Student);
