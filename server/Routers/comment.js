import expres from "express"
import { checkAdmin } from "../Middleware/checkAdmin.js"
import { addComment, deletComment, getProductComments } from "../Controllers/commentCn.js"

const commentRouter = expres.Router()

commentRouter.route("/").get(getProductComments)
commentRouter.route("/:productId").post(addComment)
commentRouter.route("/:id").delete(checkAdmin,deletComment)


export default commentRouter