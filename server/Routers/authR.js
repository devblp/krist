import express from "express"
import { checkCode, forgotPassword, login, newPassword, signup } from "../Controllers/authCn.js"

const authRouter = express.Router()

authRouter.route("/login").post(login)
authRouter.route("/signup").post(signup)
authRouter.route("/forgot-password").post(forgotPassword)
authRouter.route("/otp").post(checkCode)
authRouter.route("/new-password").post(newPassword)


export default authRouter