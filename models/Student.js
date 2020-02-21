const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  author: String,
  title: String
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
