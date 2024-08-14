import Category from "../Models/categoryM.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import ApiFeatures from "../Utils/apiFeatures.js";

export const getAllCategory = catchAsync(async (req, res, next) => {
    const features = new ApiFeatures(Category, req.query)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const category = await features.query;
  return res.status(200).json({
    status: "success",
    data: category,
  });
});
export const getOneCategory = catchAsync(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new HandleError("category not found",404));
    }
    return res.status(200).json({
        status: "success",
        data: category
    })
});

export const addCategory = catchAsync(async (req, res, next) => {
  const image = req?.file?.filename || "";
  const newCategory = await Category.create({ image, ...req.body });
  return res.status(201).json({
    status: "success",
    data: newCategory,
  });
});

export const deleteCategory = catchAsync(async (req, res, next) => {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    if (deleteCategory.image) {
      fs.unlinkSync(`${__dirname}/Public/${deleteCategory.image}`);
    }
    return res.status(204).json({
      status: "success",
      message:'delete successfully'
    });
});
