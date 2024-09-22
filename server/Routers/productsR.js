import express from "express";
import {
  addProduct,
  deletByIdProduct,
  getAllProduct,
  getIdProduct,
  updetByIdProduct,
} from "../Controllers/productCn.js";
import { checkAdmin } from "../Middleware/checkAdmin.js";
import upload from "../Utils/UploadFile.js";

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(getAllProduct)
  .post(
    checkAdmin,
    upload.fields([
      { name: "mainImage", maxCount: 1 },
      { name: "images", maxCount: 5 },
    ]),
    addProduct
  );
productsRouter
  .route("/:id")
  .get(getIdProduct)
  .patch(
    checkAdmin,
    upload.fields([
      { name: "mainImage", maxCount: 1 },
      { name: "images", maxCount: 5 },
    ]),
    updetByIdProduct
  )
  .delete(checkAdmin, deletByIdProduct);

export default productsRouter;
