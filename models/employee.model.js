const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Employee = new Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    salary: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("employee", Employee);
