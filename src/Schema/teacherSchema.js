import mongoose, { Schema } from "mongoose";

let teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  subject: {
    type: String,
    required: [true, "subject field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
});
export default teacherSchema;
