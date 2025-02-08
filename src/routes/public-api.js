import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = express.Router();

publicRouter.post('/api/user/register', userController.registerUserController);
publicRouter.post('/api/user/login', userController.loginUserController);

export default publicRouter;