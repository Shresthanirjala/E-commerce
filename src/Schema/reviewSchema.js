

import { Schema } from "mongoose";

 let reviewSchema = Schema({
    productId:{
        type:Schema.ObjectId,
        ref:"Product",
        required:[true,"productid is required"],
    },
    userId:{
        type:Schema.ObjectId,
        ref:"User",
        required:[true,"userid is required"],
    },
    description:{
       type:String,
       required:[true,"description field is required"],
    }

 });
 export default reviewSchema;