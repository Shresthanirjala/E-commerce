import { Teacher } from "../Schema/model.js";

export const createTeacherController = async (req, res) => {
  try {
    const createTeacher = await Teacher.create(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: createTeacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const readTeacherController = async (req, res, next) => {
  try {
    const createTeacher = await Teacher.find({});
    res.json({
      success: true,
      message: "User read successfully",
      result: createTeacher,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.findById(req.params.id);
    res.json({
      success: true,
      message: "User read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
