import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
} from "../controller/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.delete("/:id", deleteProductById);

router.put("/:id", updateProductById);

export default router;
