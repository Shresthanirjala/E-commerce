import { Employee } from "../Schema/model.js";

export const createEmployeeController = async (req, res, next) => {
  try {
    const createEmployee = await Employee.create(req.body);
    res.status(200).json({
      success: true,
      message: "employee created successfully",
      result: createEmployee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readEmployeeController = async (req,res,next) => {
  try {
    const createEmployee = await Employee.find({});
    res.json({
      sucess:true,
      message:"employe read sucessfully",
      result:createEmployee,
   });
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message
      
    });
  };
};

export const readSpecificEmployeeController = async (req,res,next) => {
  try {
    const createEmployee = await Employee.findById(req.params.Id)
    res.json({
      sucess:true,
      message:"employee read sucessfully",
      result:createEmployee,
    })
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message,
    });
    
  };
};
export const updateEmployeeController = async (req, res, next) => {
  try {
    let data = await Employee.findById(req.params.id,req.body,{new:true});
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

export const deleteEmployeeController = async (req, res, next) => {
  try {
    let data = await Employee.findByIdAndDelete(req.params.id);
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