import userService from "../service/user-service.js";

const registerUserController = async (req, res, next) => {
    try {
        const request = req.body;
        const result = await userService.registerUserService(request);

        res.status(201).json({
            message: 'Register Successfully',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const loginUserController = async (req, res, next) => {
    try {
        const requestLogin = req.body;
        await userService.loginUserService(requestLogin);
        res.status(201).json({
            message: 'Login Successfully',
        });
    } catch (error) {
        next(error);
    }
}

const updateUserController = async (req, res, next) => {
    try {
        const request = req.body;
        const userId = req.params.id;
        const result = await userService.updateUserService(userId, request);

        res.status(201).json({
            message: 'Updated Successfully',
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const deleteUserController = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await userService.deleteUserService(userId);

        res.status(201).json({
            message: 'Deleted Successfully'
        });
    } catch (error) {
        next(error);
    }
}

export default {
    registerUserController,
    loginUserController,
    updateUserController,
    deleteUserController
}