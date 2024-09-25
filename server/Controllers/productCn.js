import Product from "../Models/productM.js";
import ApiFeatures from "../Utils/apiFeatures.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import fs from "fs";
import { __dirname } from "../app.js";
import path from "path";

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
  const categoryId = req.body.categoryId.split(" ")
  const newProduct = await Product.create({ ...req.body, images,mainImage,categoryId:categoryId });
  res.status(201).json({
    status: "success",
    data: newProduct,
  });
});

export const updetByIdProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const mainImage = req.files.mainImage[0].filename || null;
  const images = req.files.images ? req.files.images.map(file => file.filename) : null; 
  const categoryId = req.body.categoryId.split(" ")
  const product = await Product.findById(id)
  if(!product){
    res.status(404).json({
      status:"error",
      message:"not product!"
    })
  }
  Object.assign(product, {...req.body,mainImage,images});
  if(categoryId) {
    product.categoryId = product.categoryId || []
    if(Array.isArray(categoryId)){
      product.categoryId.push(...categoryId)
    }else{
      product.categoryId.push(categoryId)
    }
  }
  
  await product.save()
  res.status(201).json({
    status: "success",
    data: product,
  });
});

export const deletByIdProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return next(new HandleError("The product is not available!", 404));
  }
  if (product.images && Array.isArray(product.images)) {
    product.images.forEach(image => {
      const imagePath = path.join(__dirname, '/Public/', image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    });
  }
  if (product.mainImage) {
    fs.unlinkSync(__dirname + "/Public/" + product.mainImage);
  }
  res.status(204).json({
    status: "success",
    message:"Delete success!"
  });
});
