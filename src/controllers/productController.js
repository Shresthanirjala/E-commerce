import { Product } from "../Schema/productModel.js";

export const createProductController = async (req, res, next) => {
  try {
    const createProduct = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: createProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const readProductController = async (req, res, next) => {
  try {
    const createProduct = await Product.find({});
    res.json({
      success: true,
      message: "User read successfully",
      result: createProduct,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificProductController = async (req, res, next) => {
  try {
    let data = await Product.findById(req.params.id);
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

export const updateProductController = async (req, res, next) => {
  try {
    let data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({
      success: true,
      message: "User updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    let data = await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "User deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};