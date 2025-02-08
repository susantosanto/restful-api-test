import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "../middleware/error-middleware.js";
import publicRouter from "../routes/public-api.js";
import userRouter from "../routes/api.js";
import searchRouter from "../routes/external-api.js";

dotenv.config();
export const web = express();
web.use(express.json());

web.use(publicRouter);
web.use(userRouter);
web.use(searchRouter);

web.use(errorMiddleware);