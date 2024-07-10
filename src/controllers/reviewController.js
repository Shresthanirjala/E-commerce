import { Review } from "../Schema/model.js";

export const createReviewController = async(req,res,next) => {
    try {
         const createReview = await Review.create(req.body);
         res.status(200).json({
        success:true,
        message:"Review is create sucessfully",
        result:createReview,
 
         })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        });
    };
};

export const readReviewController = async(req,res,next) => {
    try {
        const createReview = await Review.find({})
        res.json({
            sucess:true,
            message:"review read sucessfully",
            result:createReview,
        })
    } catch (error) {
    res.json({
        sucess:false,
        message:error.message
    });    
    };
};

export const readSpecificReviewController = async (req,res,next) => {
    try{
        const createReview = await Review.findById(req.params.id)
        res.json({
            sucess:true,
            message:"review read sucessfully",
            result:createReview,
        })
    }catch(error){
        res.json({
            sucess:false,
            message:error.message

        });
    };
};

export const updateReviewController = async (req,res,next) => {
    try {
        const createReview = await Review.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            sucess:true,
            message:"review read is sucessfull",
            result:error.message
        })
    } catch (error) {
        res.json({
            sucess:false,
            message:error.message,

        });
    };
};

export const deleteReviewController = async (req,res,next) => {
    try {
        const createReview = await Review.findByIdAndDelete(req.params.id)
        res.json({
            sucess:true,
            message:"Review is deleted sucessfully",
            result:createReview
        })
    } catch (error) {
      res.json({
        sucess:false,
        message:error.message,

      }) ; 
    };
};