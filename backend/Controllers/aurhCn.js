import catchAsync from "../Utils/catchAsync.js";
import User from "../Models/userM.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashPassword = bcryptjs.compareSync(password, user.password);
  if (!user || !hashPassword) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({id:user._id,role:user.role,loginComponent:false, phone: user.phone}, process.env.JWT_SECRET)
  return res.status(200).json({
    status:"success",
    message:"login successfully",
    data:{
        token
    }
  })
});

export const signup = catchAsync(async(req,res,next)=>{
    const {userName,email,password,phone,role="user"} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const user = await User.create({userName,email,password})

})
