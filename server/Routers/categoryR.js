import express from "express"
import { addCategory, deleteCategory, getAllCategory, getOneCategory } from "../Controllers/categoryCn.js"
import { checkAdmin } from "../Middleware/checkAdmin.js"


const categoryRouter = express.Router()

categoryRouter.route("/").get(getAllCategory).post(checkAdmin,addCategory)
categoryRouter.route("/:id").get(getOneCategory).delete(checkAdmin,deleteCategory)

export default categoryRouter