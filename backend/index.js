import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Fingerprint from "express-fingerprint";
import AuthRouter from "./routers/index.js";
import mongoose from "mongoose";

const PORT = 5000;

const envVariables = dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://polyvit-portfolio-lk.netlify.app",
    ],
  })
);

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

app.use("/auth", AuthRouter);

const start = async () => {
  try {
    await mongoose.connect(envVariables.parsed.DATABASE_URL);
    console.log("Connected to mongodb");
    app.listen(PORT, () => console.log("Сервер успешно запущен"));
  } catch (e) {
    console.log(e);
  }
};

start();

export default app;
