import { Webuser } from "../Schema/model.js";
import bcrypt from "bcrypt";
import { secretkey } from "../utils/constant.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendMail.js";


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
        isVerifiedEmail:false,
       };

       let result = await Webuser.create(createWebuser);

       let infoObj = {
        _id:result._id,
       };
       let expiryInfo = {
        expiresIn:"1d",
       };

        let token = jwt.sign(infoObj,secretkey, expiryInfo);
        
await sendEmail ({
    to: result.email,
    subject:"Registration sucessfull",
    html: `
    <h1> Your account has beem created sucessfully</h1>
    <a href="http:localhost:3000/verify-email?token=${token}">"http://localhost:3000/verify-email?token=${token}</a>`
})


        res.json({
            sucess:true,
            message:"sucessfull",
            result:result,
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        });
    };
};

export const verifyEmail = async (req,res,next) => {
   try {
    let tokenString = req.headers.authorization;
    //console.log(tokenString);
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    console.log(token);
    let infoObj = await jwt.verify(token,secretkey);
console.log(infoObj);
let userId = infoObj._id
let result = await Webuser.findByIdAndUpdate(userId,{
    isVerifiedEmail:true,
});
res.json({
    success:true,
    message:"email verified successfully",
    result:result,
});
   } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
   }
}

export const LoginWebUser = async (req,res,next) => {
    try {
        console.log(req.body);
        let email = req.body.email;
        let password = req.body.password;
        let user = await Webuser.findOne({ email:email});

        if (!user){
            throw new Error("Invalid credentials"); //user not found
        }

        if (!user.isVerifiedEmail){
            throw new Error("Email not verified"); //email not verified
        }
        let isvalidPassword = await bcrypt.compare(password, user.password);

        if(!isvalidPassword)
            throw new Error("Invalid credentials");

        //generate token

let infoObj = {
    _id : user._id,
};
let expiryInfo = {
    expiresIn: "40d",
};

let token = await jwt.sign(infoObj, secretkey, expiryInfo)

        res.json({
            success:true,
            message:"webuser login successully",
            result:user,
            user:user,
            token:token
        });
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
         
        })
        
    }
}

export const myProfile = async(req, res, next) =>{
    try {
        let _id = req._id;
        let result = await Webuser.findById(_id);
        res.status(200).json({
            success:true,
            message:"webusermyProfile read successffully",
            result:result,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}
 export const updateProfile = async(req,res,next) => {
    try {
        let _id = req._id;
        let data = req.body;
        delete data.email
        delete data.password

        let result = await Webuser.findByIdAndUpdate(_id,data,{new:true})

        res.status(200).json({
            success: true,
            message:"profile updated successfully",
            result:result,
        })

    
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
      
    }

 }

 export const updatePassword = async(req, res, next) => {
    try {
let id = req._id;
let oldPassword = req.body.oldPassword;
let newPassword = req.body.newPassword;
let data = await Webuser.findById(id)

let hashedPassword = data.password;
let isValidPassword = await bcrypt.compare(oldPassword,hashedPassword);
if(isValidPassword){
    let newHashedPassword = await bcrypt.hash(newPassword,10);
    let result =  await Webuser.findByIdAndUpdate(
        id,
        {password:newHashedPassword},
            {new:true}
    );
    res.status(200).json({
        success:true,
        message:"webuser password updates succesffulyy",
        result:result,
    });
}else{
    throw new Error("password already updated")
}

        
    } catch (error) {
      
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }

 export const forgotPassword = async(req,res,next) => {
    
      try {
        
        let email = req.body.email;

        let result = await Webuser.findOne({ email:email});
        if(result){
        //generate token
        let infoObj = {
            id:user._id,
         
       };
       let expiryInfo = {
        expiresIn:"1d",
       }

let token = await jwt.sign(infoObj,secretkey,expiryInfo);

await sendEmail({
    to:email,
    subject: "reset your password",
    html:`<h1>please click this link yon reset your password</h1>
    <a href ="http://localhost:3000/reset-password?token=${token}">"http://localhost:3000/reset-password?token=${token}</a>
    `,
})
        }
res.status(200).json({
    success:true,
    messsage:"password resent link has been sent to your email",
    
})

      } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
      }  

 }
 export const resetPassword = async (req,res,next) => {
    try {
        let id = req._id;
        let password = req.body.password;
        let hashedPassword = await bcrypt.hash(password, 10);
        let result = await Webuser.findByIdAndUpdate(
            id,
            {password:hashedPassword},
            {new:true}
    );

       
res.status(200).json({
    success:true,
    messsage:"webuser password reset succesffully",
    result:result,
    
});

      } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        });
      }  
 };

export const readWebuserController = async (req,res,next) => {
    try {
        let result = await Webuser.find({})
            res.json({
              sucess:true,
              message:"webuser created sucessfully",
              result:result,  
            });

        
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,
        });

    };
};

export const readSpecificWebuserController = async (req,res,next) => {
    try {
        let result= await Webuser.findById(req.params.id)
        res.json({
            sucess:true,
            message:"webuser read sucessfully",
            result:result,
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
        let id = req.params.id;
        let data = req.body
        delete data.email;
        delete data.body.password;
        const result = await Webuser.findByIdAndUpdate(id, data, {new:true})
        res.json({
            sucess:true,
            message:"webuser updates sucessfully",
            result:result,
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