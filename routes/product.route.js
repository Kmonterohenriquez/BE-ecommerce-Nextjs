const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getMenProducts,
  getWomenProducts,
} = require("../controllers/product.controller.js");

// Get All Product
router.get("/", getProducts);
// Get All Men Products
router.get("/men", getMenProducts);
// Get All Women Products
router.get("/women", getWomenProducts);
// Get one Product
router.get("/:id", getProduct);
// Create a Product
router.post("/", createProduct);
// Update a product
router.put("/:id", updateProduct);
// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
