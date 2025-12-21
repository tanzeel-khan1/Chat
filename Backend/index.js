// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import userRoute from "./routes/userRoute.js";
// import cookieParser from "cookie-parser";
// import logger from "./middleware/logger.js"
// import MessageRoutes from "./routes/MessageRoutes.js"
// import {app, server} from "./SocketIO/server.js"
// import path from "path";
// import { fileURLToPath } from "url";

// // __dirname ko define karna ES Modules me
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)
// dotenv.config();
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// const PORT = process.env.PORT || 5001;
// const URl = process.env.MONGO_URI;

// try {
//   mongoose.connect(URl);
//   console.log(" Database connected ");
// } catch (error) {
//   console.log(error);
// }

// app.use(logger);


// app.use("/api", userRoute);
// app.use("/api/messages", MessageRoutes)
// // //// code For deployment

// // if (process.env.NODE_ENV === "production") {
// //   const path = require("path");
// //   const dirPath = path.resolve(__dirname, "Frontend", "dist");

// //   // Serve static files
// //   app.use(express.static(dirPath));

// //   // Serve index.html for all routes
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(dirPath, "index.html"));
// //   });
// // }
// if (process.env.NODE_ENV === "production") {
//   const dirPath = path.resolve(__dirname, "Frontend", "dist");

//   app.use(express.static(dirPath));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(dirPath, "index.html"));
//   });
// }

// server.listen(PORT, () => {
//   console.log(` Server running on localhost ${PORT} `);
// });
// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRoute from "./routes/userRoute.js";
import MessageRoutes from "./routes/MessageRoutes.js";
import logger from "./middleware/logger.js";
import { app, server } from "./SocketIO/server.js";

// ===== ES MODULE __dirname FIX =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== ENV =====
dotenv.config();

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger);

// ===== DB =====
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ===== API ROUTES =====
app.use("/api", userRoute);
app.use("/api/messages", MessageRoutes);

// ===== PRODUCTION (REACT BUILD) =====
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve(__dirname, "Frontend", "dist");

  // static files
  app.use(express.static(dirPath));

  // SPA fallback (EXPRESS v5 SAFE)
  app.use((req, res) => {
    res.sendFile(path.join(dirPath, "index.html"));
  });
}

// ===== START SERVER =====
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
