const express = require("express");
const router = express.Router();
const db = require("../database/database");
const multer = require("multer");
const objectId = require("mongodb").ObjectId;

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

router.get("/getProducts", async (req, res) => {
  const products = await db.getDb().collection("products").find().toArray();
  res.status(200).json({ products: products });
});

router.get("/getProduct/:id", async (req, res) => {
  const productId = req.params.id;

  const id = new objectId(productId);
  const product = await db.getDb().collection("products").findOne({ _id: id });
  res.status(200).json({ message: "Success", product: product });
});

router.put("/updateProduct/:id", upload.single("image"), async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  const imageFile = req.file;
  const id = new objectId(productId);

  const product = {
    name: productData.name,
    imagePath: imageFile.path,
    price: productData.price,
    category: productData.category,
    description: productData.description,
  };

  await db
    .getDb()
    .collection("products")
    .updateOne({ _id: id }, { $set: product });
});

router.delete("/deleteProduct/:id", async (req, res) => {
  const productId = req.params.id;
  const id = new objectId(productId);

  await db.getDb().collection("products").deleteOne({ _id: id });
});

module.exports = router;
