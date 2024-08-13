import Comment from "../Models/commentM.js";
import catchAsync from "../Utils/catchAsync.js";

export const addComment = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { productId } = req.params;
  const { ...others } = req.body;
  const newComment = await Comment.create({ ...others, userId, productId });
  res.status(201).json({
    status: "success",
    data: { newComment },
  });
});

export const getProductComments = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const comments = await Comment.find({ productId });
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
