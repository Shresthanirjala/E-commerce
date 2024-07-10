

import { Schema } from "mongoose";

let departmentSchema = Schema({
    name:{
        type:"String",
        required:[true,"name field is required"],
    },
    hod:{
        type:"string",
        required:[true,"hod field is required"],
    },
    totalmember:{
        type:"Number",
        required:[true,"totalmemeber field is required"],
    }
});
export default departmentSchema;