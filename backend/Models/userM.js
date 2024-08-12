import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cardNumber: {
    type: String,
    unique: [true, "Card Number exist"],
  },
  cardName: {
    type: String,
    unique: [true, "Card Name exist"],
  },
  ExpriyDate: {
    type: String,
  },
  cvv: {
    type: String,
  },
});

const AddressSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  pin: {
    type: String,
  },
});

const cartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
  },
  item: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
});

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User name required!"],
      unique: [true, "User name exist"],
    },
    email: {
      type: String,
      required: [true, "Email required!"],
      unique: [true, "Email exist"],
      match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, "invalid email"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "invalid Pssword",
      ],
    },
    phone: {
      type: String,
      unique: [true, "Phone exist"],
    },
    card: [{ type: cardSchema }],
    address: [{ type: AddressSchema }],
    cart: {
      type: cartSchema,
      default: {
        totalPrice: 0,
        item: [],
      },
    },
    profileImage:{
        type: String,
        default: 'http://localhost:7000/defaultProfile.jpg',
    },
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },
    role:{
      type: String,
      enum: ['admin', 'user'],
      default:"user"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
