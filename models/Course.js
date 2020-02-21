const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
