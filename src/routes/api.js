import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";

const userRouter = express.Router();
userRouter.use(authMiddleware);

userRouter.put('/api/user/:id', userController.updateUserController);
userRouter.delete('/api/user/:id', userController.deleteUserController);

export default userRouter;
