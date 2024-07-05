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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
