import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";

const app = express();

//app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true,
  }),
);

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;
