import express from "express"
import { checkAdmin } from "../Middleware/checkAdmin.js"
import { getAllUser, getOneUser, updateUser } from "../Controllers/userCn.js"

const userRouter = express.Router()

userRouter.route("/").get(checkAdmin,getAllUser)
userRouter.route("/:id").get(checkAdmin,getOneUser).patch(updateUser)



export default userRouter