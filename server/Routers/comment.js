import expres from "express"
import isAdmin from "../Middleware/isAdmin.js"
import { addComment, deletComment, getProductComments } from "../Controllers/commentCn.js"

const commentRouter = expres.Router()

commentRouter.route("/:productId").get(getProductComments).post(addComment)
commentRouter.route("/:id").delete(isAdmin,deletComment)


export default commentRouter