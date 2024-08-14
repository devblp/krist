import express from "express"
import { addItemCart, deletAllItemCart, deletQountitiItemCart, getCart } from "../Controllers/CartCn.js"
import isLogin from "../Middleware/isLogin.js"

const cartRouter = express.Router()

cartRouter.route("/").patch(isLogin,addItemCart).get(isLogin,getCart).delete(isLogin,deletAllItemCart)
cartRouter.route("/remove").patch(isLogin,deletQountitiItemCart)


export default cartRouter