import { Student } from "../Schema/model.js";

export const createStudentController = async (req, res) => {
  try {
    const createStudent = await Student.create(req.body);
    res.status(200).json({
      success: true,
      message: "student created successfuly",
      result: createStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const readStudentController = async (req, res, next) => {
  try {
    const createStudent = await Student.find({});
    res.json({
      success: true,
      message: "User read successfully",
      result: createStudent,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificStudentController = async (req,res,next) => {
  try {
    const createStudent = await Student. findByIdAndDelete(req.params.Id)
    res.json({
      success: true,
      message:"User read successfully",
      result:createStudent,
    });
  } catch (error) {
    res.json({
      success:false,
      message:error.message,
    });
  };
};

export const updateStudentController = async (req, res, next) => {
  try {
    let data = await Student.findById(req.params.id, req.body,{new:true});
    res.json({
      success: true,
      message: "student updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudentController = async (req, res, next) => {
  try {
    let data = await Student.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Student deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};