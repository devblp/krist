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

productsRouter.route("/").get(getAllProduct);
productsRouter
  .route("/:id")
  .get(getIdProduct)
  .post(isAdmin, addProduct)
  .patch(isAdmin, updetByIdProduct)
  .delete(isAdmin, deletByIdProduct);

export default productsRouter;
