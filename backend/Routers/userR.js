import express from "express"
import isAdmin from "../Middleware/isAdmin.js"
import { getAllUser, getOneUser, updateUser } from "../Controllers/userCn.js"
import isLogin from "../Middleware/isLogin.js"

const userRouter = express.Router()

userRouter.route("./").get(isAdmin,getAllUser)
userRouter.route("./id").get(isAdmin,getOneUser).patch(isLogin,updateUser)



export default userRouter