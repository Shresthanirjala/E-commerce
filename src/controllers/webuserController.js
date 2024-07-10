import { Webuser } from "../Schema/model.js";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

export const createWebuserController = async(req,res,next)=>{
    try {
        let createWebuser = req.body
       //console.log(req.body);
       //console.log(req.body.password);
       let password = req.body.password;
       //console.log(password);
       let hashedPassword = await bcrypt.hash(password,10);
       //console.log(hashedPassword);
       createWebuser = {  
         ...createWebuser,
        password:hashedPassword,
        isverifiedEmail:false,
       };
        res.json({
            sucess:true,
            message:"sucessfull",
            result:createWebuser,
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        });
    };
};


export const readWebuserController = async (req,res,next) => {
    try {
        const createWebuser = await Webuser.find({})
            res.json({
              sucess:true,
              message:"webuser created sucessfully",
              result:createWebuser,  
            });

        
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,
        });

    };
};

// let infoObj ={
//     id:"12345",

// };
// let secretkey = "n9solution";
// let expiryDate={
//     expiresIn:"1d",
// }
// let token = jwt.sign(infoObj, secretKey,expiryDate);
// console.log(token);

export const readSpecificWebuserController = async (req,res,next) => {
    try {
        const createWebuser = await Webuser.findById(req.params.id)
        res.json({
            sucess:true,
            message:"webuser read sucessfully",
            result:createWebuser,
        })
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message
        });
    };
};

export const updateWebuserController = async (req,res,next) => {
    try {
        const createWebuser = await Webuser.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json({
            sucess:true,
            message:"webuser updates sucessfully",
            result:createWebuser,
        })
    } catch (error) {
      res.json({
        sucess:false,
        message:error.message
      })  ;
    };
};

export const deleteWebuserController = async (req,res,next) => {
    try {
        const createWebuser = await Webuser.findByIdAndDelete(req.params.id)
        res.json({
            sucess:true,
            message:"webuser deleted sucessfilly",
            result:createWebuser,
        })
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,
        })
    }
}