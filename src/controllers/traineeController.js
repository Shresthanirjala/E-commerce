import { Trainee } from "../Schema/model.js";

export const createtTraineeController = async (req, res, next) => {
  try {
    const createTrainee = await Trainee.create(req.body);
    res.status(200).json({
      success: true,
      message: "trainee created successfully",
      resul: createTrainee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
