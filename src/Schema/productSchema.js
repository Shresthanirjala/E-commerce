import { Schema } from "mongoose";

let productSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  category: {
    type: String,
    required: [true, "category field is required"],
  },
});
export default productSchema;
