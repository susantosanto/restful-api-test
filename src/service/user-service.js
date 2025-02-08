import userRepository from "../repository/user-repository.js";
import bcrypt from "bcrypt";
import {
    createUserValidation,
    getUserValidation,
    loginUserValidation,
    updateUserValidation
} from "../validation/user-validation.js";
import {validate} from "../utils/validate.js";
import {ResponseError} from "../error/response-error.js";
import jwt from "jsonwebtoken";
import {logger} from "../application/logging.js";

const registerUserService = async (request) => {
    const user = validate(createUserValidation, request);

    const countUser = await userRepository.userCount(user.id);
    if (countUser === 1) {
        throw new ResponseError(409, `User with id ${user.id} is already exists`);
    }

    user.password = await bcrypt.hash(user.password, 10);
    return userRepository.createUser(user);
}

const loginUserService = async (request) => {
    const loginRequest = validate(loginUserValidation, request);

    const userLogin = await userRepository.getUserById(loginRequest.id);

    if (!userLogin) {
        throw new ResponseError(401, `User with id ${loginRequest.id} not found`);
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, userLogin.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, 'Invalid Credential');
    }

    const token = jwt.sign(
        {id: userLogin.id, name: userLogin.name},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    );

    logger.info(`${userLogin.id}, token: ${token}`);
    return token;
}

const updateUserService = async (id, request) => {
    const user = validate(updateUserValidation, request);
    const contactExist = await userRepository.userCount(id);
    if (contactExist !== 1) {
        throw new ResponseError(401, `user with id ${id} not found`);
    }
    return userRepository.updateUser(id, user);
}

const deleteUserService = async (id) => {
    const userCount = await userRepository.userCount(id);
    if (userCount !== 1) {
        throw new ResponseError(404, `user with id ${id} not found`);
    }

    return userRepository.deleteUser(id);
}

export default {
    registerUserService,
    loginUserService,
    updateUserService,
    deleteUserService
}