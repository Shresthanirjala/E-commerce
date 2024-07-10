

import { Schema } from "mongoose";

let collegeschema = Schema({
    name:{
        type:  String,
        required:[true,"name field is required"],
    },
    Location:{
        type: String,
        required:[true,"location filed is required"]
    }
})
export default collegeschema;
