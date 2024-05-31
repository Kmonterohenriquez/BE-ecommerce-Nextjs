const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
require("dotenv").config();

var cors = require("cors");
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(process.env.DB_URL_CONNECTION)
  .then(() => {
    console.log("Connected to database!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((error) => {
    console.log("Connection failed!: ", error);
  });
