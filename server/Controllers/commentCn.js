import Comment from "../Models/commentM.js";
import Product from "../Models/productM.js";
import User from "../Models/userM.js";
import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";

export const addComment = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { productId } = req.params;
  const { ...others } = req.body;
  const newComment = await Comment.create({ ...others, userId, productId });

  await Product.findByIdAndUpdate(productId, {
    $push: { comment: newComment._id },
  });

  await User.findByIdAndUpdate(userId, {
    $push: { comment: newComment._id },
  });
  res.status(201).json({
    status: "success",
    data: { newComment },
  });
});

export const getProductComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find();
  return res.status(201).json({
    status: "success",
    data: comments,
  });
});

export const deletComment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const comment = await Comment.findByIdAndDelete(id);
  res.status(204).json({
    status: "success",
  });
});
