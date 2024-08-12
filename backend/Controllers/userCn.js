import catchAsync from "../Utils/catchAsync";
import ApiFeatures from "../Utils/apiFeatures.js";
import User from "../Models/userM.js";
import HandleError from "../Utils/handleError.js";
import jwt from "jsonwebtoken"

export const getAllUser = catchAsync(async (req, res, next) => {
  const queryString = {
    ...req.query,
    fields: `${req.query.fields || ""},-password`,
  };
  const features = await ApiFeatures(User, queryString)
    .filters()
    .sort()
    .limitFields()
    .paginate()
    .populate();
  const users = await features.query;
  res.status(200).json({
    status: "success",
    data: users,
  });
});

export const getOneUser = catchAsync(async(req,res,next)=>{
    const user = await User.findById(req.params.id).select("-password -__v")
    if(!user){
        return next(new HandleError("user not found",404))
    }else{
        return res.status(200).json({
            status:"success",
            data:user
        })
    }
})

export const updateUser = catchAsync(async(req,res,next)=>{
    try {
        if(!req.headers.authorization){
            return next(new HandleError("not logins!", 401));
        }
        const token = req.headers.authorization.split(" ")[1]
        const {role:tokenRole, id:userId} = jwt.verify(token,process.env.JWT_SECRET)
        let user;
        const {id} = req.params
        if(tokenRole == "admin" || userId == id){
            if(tokenRole == "admin"){
                user = await User.findByIdAndUpdate(id, req.body, {new:true})
            }else{
                const {role, ...others} = req.body;
                user = await User.findByIdAndUpdate(id, others, {new:true})
            }
        }else {
            return next(new HandleError("You are not allowed to do this", 401));
        }
        return res.status(200).json({
            status: "success",
            data: user,
            message : "user Uodate"
        })
    } catch (error) {
        return next(new HandleError("Invalid token or request", 400));
    }
})