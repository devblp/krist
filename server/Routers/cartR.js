import express from "express"
import { addItemCart, deletAllItemCart, deletQountitiItemCart, getCart } from "../Controllers/CartCn.js"
import isLogin from "../Middleware/isLogin.js"

const cartRouter = express.Router()

cartRouter.route("/").patch(addItemCart).get(isLogin,getCart).delete(deletAllItemCart)
cartRouter.route("/remove").patch(deletQountitiItemCart)


export default cartRouter