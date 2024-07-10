import { Schema } from "mongoose";

let bookSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  price: {
    type: String,
    required: [true, "price field is required"],
  },
  author: {
    type: String,
    required: [true, "authot filed is required"],
  },
  isAvailable:{
    type:Boolean,
    required:[true,"isAvilable field is required"],
  }
});
export default bookSchema;
