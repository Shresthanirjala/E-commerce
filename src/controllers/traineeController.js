import { Trainee } from "../Schema/model.js";

export const createtTraineeController = async (req, res, next) => {
  try {
    const createTrainee = await Trainee.create(req.body);
    res.status(200).json({
      success: true,
      message: "trainee created successfully",
      result: createTrainee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const readTraineeController = async (req,res,nex) =>{
  try {
    const createTrainee = await Trainee.find({})
      res.json({
     success:true,
     message:"trainee read successfully",
     result:createTrainee,
      });
    
  } catch (error) {
    res.json({
      success:false,
      message:error.message,
    });
  };
};

export const readSpecificTraineeController = async (req, res, next) => {
  try {
    let data = await Trainee.findById(req.params.id);
    res.json({
      success: true,
      message: "User read successfully",
      result: data,
    });
  } catch (error) {
    res.jon({
      success: false,
      message: error.message,
    });
  }
};

export const traineeUpdateController = async (req,res,next) => {
 try {
  let data = await Trainee.findByIdAndUpdate(req.params.id,req.body,{new:true});
res.json({
  sucess:true,
  message:"trainee updates sucessfully",
  result:data,
})
 } catch (error) {
  res.json({
    sucess:false,
    message:error.message,
  })
 }
}

export const traineeDeleteController = async (req,res,next) => {
  try {
    let data = await Trainee.findByIdAndDelete(req.params.id)
    res.json({
      sucess:true,
      message:"trainee deletes sucessfully",
      result:data,
    })
  }catch(error){
    res.json({
      sucess:false,
      message:error.message,
      
    })
  }
}