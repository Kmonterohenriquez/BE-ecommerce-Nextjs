const mongoose = require("mongoose");

const imageSubSchema = new mongoose.Schema(
  {
    src: String,
    alt: String,
  },
  { timestamps: true }
);

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    category: {
      type: String,
      required: [true, "Please enter product category"],
    },
    personType: {
      type: String,
      required: [true, "Please enter product person type"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    quantity: {
      type: Number,
      default: 0,
      required: [true, "Please enter product quantity"],
    },

    price: {
      type: Number,
      default: 0,
      required: [true, "Please enter product price"],
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: [imageSubSchema],
    sizes: {},
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
