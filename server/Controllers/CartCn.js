import catchAsync from "../Utils/catchAsync.js";
import jwt from "jsonwebtoken";
import HandleError from "../Utils/handleError.js";
import Product from "../Models/productM.js";
import User from "../Models/userM.js";

export const addItemCart = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { id: productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return next(new HandleError("No product", 404));
  }
  const user = await User.findById(userId);
  if (!user) {
    return next(new HandleError("plese login", 404));
  }
  let price = product.price;
  let cart = user.cart;
  cart.totalPrice += +price;
  const add = false;
  const items = cart.items.map((e) => {
    if (e.productId == productId) {
      e.quantity += 1;
      add = true;
      return e;
    }
    return e;
  });
  if (!add) {
    items.push({ productId, quantity: 1 });
  }
  let updateUser = await User.findByIdAndUpdate(
    userId,
    { cart: { totalPrice: cart.totalPrice, items } },
    { new: true }
  );
  return res.status(200).json({
    status: "success",
    data: updateUser.cart,
  });
});

export const deletAllItemCart = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const user = await User.findById(userId);
  if (!user) return next(new HandleError("plese login", 404));
  await User.findByIdAndUpdate(userId, { cart: { totalPrice: 0, items: [] } });
  return res.status(200).json({
    status: "success",
    message: "cart is clear",
  });
});

export const deletQountitiItemCart = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const { id: productId } = req.body;
  const user = await User.findById(userId);
  let cart = user.card;
  let totalprice = card.totalPrice;
  const items = cart.items.map((item) => {
    if (item.productId == productId) {
      item.quantity -= 1;
      totalprice -= item.price * item.quantity;
      if (item.quantity == 0) {
        totalprice = 0;
        return false;
      }
      return e;
    }
  });
  const newCart = await User.findByIdAndUpdate(
    userId,
    { cart: { totalprice, items } },
    { new: true }
  );
  return res.status(200).json({
    status: "sucsess",
    data: newCart.cart,
  });
});

export const getCart = catchAsync(async (req, res, next) => {
  const { id: userId } = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.JWT_SECRET
  );
  const user = await User.findById(userId);
  const userCart = user.card
  return res.status(200).json({
    status:"success",
    data:userCart
  })
});
