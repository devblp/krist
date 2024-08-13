import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import authRouter from "./Routers/authR.js";
import userRouter from "./Routers/userR.js";
import productsRouter from "./Routers/productsR.js";
import commentRouter from "./Routers/comment.js";

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("Public"))
app.use(morgan("dev"))


app.use("/api/v1/user",userRouter)
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/products",productsRouter)
app.use("/api/v1/comment",commentRouter)

export default app