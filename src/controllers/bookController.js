import { Book } from "../Schema/model.js";

export const createBookController = async (req, res, next) => {
  try {
    const createBook = await Book.create(req.body);
    res.status(200).json({
      success: true,
      message: "book created successfully",
      result: createBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messagfge: error.message,
    });
  }
};
export const readBookController = async (req, res, next) => {
  try {
    const CreateBook = await Book.find({});
    res.json({
      success: true,
      message: "book read successfully",
      result: CreateBook,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
