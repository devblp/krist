import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  titel: {
    type: String,
    required: [true, "Titel comment required"],
  },
  commetn: {
    type: String,
    required: [true, "Comment required"],
  },
  rating: {
    type: Number, // Average product rating (e.g., 4.5)
    default: 0, // Default value is 0
    min: 0, // Minimum rating is 0
    max: 5, // Maximum rating is 5
  },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
