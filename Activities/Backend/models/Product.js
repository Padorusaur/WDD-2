import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    }, 
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
