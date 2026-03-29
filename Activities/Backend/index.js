import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const isAllowedLocalhost = /^http:\/\/localhost:\d+$/.test(origin);
      if (origin === FRONTEND_ORIGIN || isAllowedLocalhost) {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked for this origin"));
    },
  })
);
app.use(express.json()); 
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

app.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});



const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};

startServer();