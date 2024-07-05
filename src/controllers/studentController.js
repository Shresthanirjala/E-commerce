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
