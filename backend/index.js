import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Fingerprint from "express-fingerprint";
import AuthRouter from "./routers/index";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(
  Fingerprint({
    parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
  })
);

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log("Сервер успешно запущен");
});
