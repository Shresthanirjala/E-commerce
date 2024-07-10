import { Schema } from "mongoose";

let traineeSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "number field is required"],
  },
  email: {
    type: String,
    required: [true, "phonenumber field is requied"],
  },
  classFaculty:{
    type:String,
    required:[true, "classfaculty field is required"],
  }
});
export default traineeSchema;
