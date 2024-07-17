
import { Schema } from "mongoose";

let webuserSchema =Schema({
Fullname:{
    type:String,
    required:[true,"fullname field is required"],
},
email:{
    type:String,
    unique:true,
    required:[true,"email field is required"],
},
dob:{
    type:Date,
    required:[true,"date field is required"],
},
password:{
    type:String,
    required:[true,"password field is required"],
},
gender:{
    type:String,
    required:[true,"gender field is required"],
},
role:{
    type:String,
    required:[true,"role field is required "],
},
isVerifiedEmail:{
    type:Boolean,
    required:[true,"isverifiedEmail field is required"],
},

})

export default webuserSchema;