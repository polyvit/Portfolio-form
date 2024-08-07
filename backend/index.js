import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Fingerprint from "express-fingerprint";
import AuthRouter from "./routers/index.js";

const PORT = 5000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log("Сервер успешно запущен");
});

//process.env.CLIENT_URL
