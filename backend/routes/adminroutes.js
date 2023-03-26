const express = require("express");
const router = express.Router();
const db = require("../database/database");
const multer = require("multer");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storageConfig });

router.post("/createProducts", upload.single("image"), async (req, res) => {
  const productData = req.body;
  const imageFile = req.file;
  const product = {
    name: productData.name,
    imagePath: imageFile.path,
    price: productData.price,
    category: productData.category,
    description: productData.description,
  };

  await db.getDb().collection("products").insertOne(product);
});

router.get("/products", async (req, res) => {
  const products = await db.getDb().collection("products").find().toArray();
  res.status(200).json({ message: "Success", products: products });
});

module.exports = router;
