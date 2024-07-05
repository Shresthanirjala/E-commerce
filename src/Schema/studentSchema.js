import mongoose, { Schema } from "mongoose";

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name field is required"],
  },
  age: {
    type: Number,
    require: [true, "age field is required"],
  },
});
export default studentSchema;
