import { Doctor } from "../Schema/model.js";

export const createdoctorController = async (req, res, next) => {
  try {
    const createDoctor = await Doctor.create(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: createDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
