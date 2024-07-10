import { College } from "../Schema/model.js";


export const createCollegeController = async (req, res, next) => {
  try {
    const createCollege = await College.create(req.body);
    res.status(200).json({
      success: true,
      message: "college created successfully",
      result: createCollege
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const readCollegeController = async (req, res, next) => {
  try {
    const CreateCollege = await College.find({});
    res.json({
      success: true,
      message: "college read successfully",
      result: CreateCollege,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificCollegeController = async(req,res,next) => {
  try {
    const createCollege = await College.findById(req.params.id);
res.json({
  success:true,
  messag:"College read successfully",
  result:createCollege,
});
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message,
    });
  };
};

export const updateCollegeController = async(req,res,next) => {
  try {
    const createCollege= await College.findById(req.params.id,req.body,{new:true})
    res.json({
      sucess:true,
      message:"college updated successfully",
      result:createCollege,
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message,


    })
  }
}

export const deleteCollegeController = async(req,res,next) => {
  try {
    const createCollege = await College.findById(req.params.id)
    res.json({
      sucess:true,
      message:"college deleted sucessfully",
      result:createCollege,
    })
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message
    })
  }
}