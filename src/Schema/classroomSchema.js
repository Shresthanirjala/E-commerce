

import { Schema } from "mongoose";

let classroomSchema = Schema({
    name:{
        type:String,
        required:[true,"name field is required"],
    },
    numberOfBench:{
        type:Number,
        required:[true,"numberof bench field is required"],

    },
    hasTv:{
        type:Boolean,
        required:[true,"hastv field is required"],
    }
})

export default classroomSchema;