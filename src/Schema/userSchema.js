import { Schema } from "mongoose";

let userSchema = Schema({
  name: {
    type: String,
    required: [true, "name  field is required "],
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is requied"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber field is required"],
  },
});
export default userSchema;
