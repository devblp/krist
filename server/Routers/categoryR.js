import express from "express"
import { addCategory, deleteCategory, getAllCategory, getOneCategory } from "../Controllers/categoryCn.js"
import isAdmin from "../Middleware/isAdmin.js"


const categoryRouter = express.Router()

categoryRouter.route("/").get(getAllCategory).post(isAdmin,addCategory)
categoryRouter.route("/:id").get(getOneCategory).delete(isAdmin,deleteCategory)

export default categoryRouter