const express = require("express");
const app = express();
const products = require("../backend/data/products");
app.get("/", (req, res) => {
  res.send("API is running ");
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  console.log("product", product);
  res.json(product);
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(5000, console.log("Server running on port 5000"));
