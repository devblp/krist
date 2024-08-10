import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 7001
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1); 
  });


