import Product from "../Models/productM.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import fs from "fs";
import { __dirname } from "../app.js";

export const getAllProduct = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Product, req.query)
    .filters()
    .populate()
    .limitFields()
    .sort()
    .paginate();
  const products = await features.query;
  res.status(200).json({
    status: "success",
    data: products,
  });
});

export const getIdProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product)
    return next(new HandleError("The product is not available!", 404));
  res.status(200).json({
    status: "success",
    data: product,
  });
});

export const addProduct = catchAsync(async (req, res, next) => {
  const mainImage = req.files.mainImage[0].filename;
  const images = req.files.images ? req.files.images.map(file => file.filename) : []; 
  const newProduct = await Product.create({ ...req.body, images,mainImage });
  res.status(201).json({
    status: "success",
    data: newProduct,
  });
});

export const updetByIdProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const mainImage = req.files.mainImage[0].filename;
  const images = req.files.images ? req.files.images.map(file => file.filename) : []; 
  const product = await Product.findByIdAndUpdate(id, req.body, images,mainImage, {
    new: true,
  });
  res.status(201).json({
    status: "success",
    data: product,
  });
});

export const deletByIdProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (product.images) {
    fs.unlinkSync(__dirname + "/Public/" + product.images);
  }
  if (!product) {
    return next(new HandleError("The product is not available!", 404));
  }
  res.status(204).json({
    status: "success",
  });
});
