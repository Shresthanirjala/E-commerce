import { Product } from "../Schema/productModel.js";

export const createProductController = async (req, res) => {
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
