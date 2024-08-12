import catchAsync from "../Utils/catchAsync.js";
import User from "../Models/userM.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import HandleError from "../Utils/handleError.js";
import { sendAuthCode, verifyCode } from "../Utils/smsHandler.js";

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashPassword = bcryptjs.compareSync(password, user.password);
  if (!user || !hashPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign(
    { id: user._id, role: user.role, loginComponent: false, phone: user.phone },
    process.env.JWT_SECRET
  );
  return res.status(200).json({
    status: "success",
    message: "login successfully",
    data: {
      token,
    },
  });
});

export const signup = catchAsync(async (req, res, next) => {
  const { password, role = "user", ...others } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = await User.create({ role, password: hashedPassword, others });
  return res.status(200).json({
    status: "success",
    message: "register successfully",
  });
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  const { phone } = req.body;
  const user = await User.findOne({ phone });
  if (!user) {
    return next(new HandleError("user not found", 404));
  }
  const smsData = sendAuthCode(user.phone);
  return res.status(200).json({
    status: "success",
    message: "send auth code successfully",
  });
});

export const checkCode = catchAsync(async (req, res, next) => {
  const { phone, code } = req.body;
  const user = await User.findOne({ phone });
  const smsData = await verifyCode(phone, code);
  if (!smsData.success) {
    return next(new HandleError("invalid code", 404));
  }
  const token = jwt.sign(
    { id: user._id, role: user.role, loginComplete: true },
    process.env.JWT_SECRET
  );
  return res.status(200).json({
    status: "success",
    message: "otp successfully",
    data: token,
  });
});

export const newPassword = catchAsync(async (req, res, next) => {
  const { id } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { password } = req.body;
  const hashPassword = bcryptjs.hashSync(password,10)
  const updatedUser = await User.findByIdAndUpdate(id, { password: hashPassword }, { new: true });
  return res.status(200).json({
    status: "success",
    message: "Password changed successfully",
    data:{
        fullName:updatedUser.fullName,
        email:updatedUser.email,
        role:updatedUser.role,
  
      }
  })
});
