//Generate Token

import jwt from "jsonwebtoken";

let infoObj ={
    id:"1234",

};
let secretKey = "n9solution";

//expiry info must be in same format
let expiryDate = {
    expiresIn:"1d",
}
   

//generate Token
let token = jwt.sign(infoObj, secretKey,expiryDate);
console.log(token);

//verify
let token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MjA1MDUxNTMsImV4cCI6MTcyMDU5MTU1M30.JjQbQEiDQJ6gow0euX4zQW7qqVkZ5Fgogn_4nNhA4Tg";

try{
    let infoObj = jwt.verify(token1,"n9solution");
    console.log(infoObj);
}catch(error) {
    console.log(error.message);
}
