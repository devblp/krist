import express from "express";
import {
  addProduct,
  deletByIdProduct,
  getAllProduct,
  getIdProduct,
  updetByIdProduct,
} from "../Controllers/productCn.js";
import isAdmin from "../Middleware/isAdmin.js";

const productsRouter = express.Router();

productsRouter.route("/").get(getAllProduct).post(isAdmin, addProduct)
productsRouter
  .route("/:id")
  .get(getIdProduct)
  .patch(isAdmin, updetByIdProduct)
  .delete(isAdmin, deletByIdProduct);

export default productsRouter;
