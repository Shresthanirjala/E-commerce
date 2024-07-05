import { Schema } from "mongoose";

let doctorSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  address: {
    type: String,
    required: [true, "address field is required"],
  },
});
export default doctorSchema;
