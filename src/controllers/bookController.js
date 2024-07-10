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

export const readSpecificBookController = async(req,res,next) => {
  try {
    const createBook = await Book.findById(req.params.id);
res.json({
  success:true,
  messag:"book cread successfully",
  result:createBook,
});
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message,
    });
  };
};

export const updateBookController = async(req,res,next) => {
  try {
    const createBook = await Book.findById(req.params.id,req.body,{new:true})
    res.json({
      sucess:true,
      message:"book updated successfully",
      result:createBook,
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message,


    })
  }
}

export const deleteBookController = async(req,res,next) => {
  try {
    const createBook = await Book.findById(req.params.id)
    res.json({
      sucess:true,
      message:"Book deleted sucessfully",
      result:createBook,
    })
  } catch (error) {
    res.json({
      sucess:false,
      message:error.message
    })
  }
}