import Joi from "joi";

const createUserValidation = Joi.object({
    email: Joi.string().max(50).required(),
    password: Joi.string().min(6).max(50).required()
});

const loginUserValidation = Joi.object({
    email: Joi.string().max(50).required(),
    password: Joi.string().min(6).max(50).required()
});

const getUserValidation = Joi.number().positive().required();

const updateUserValidation = Joi.object({
    id: Joi.number().positive().required(),
    email: Joi.string().max(50).optional(),
    password: Joi.string().min(6).max(50).optional()
});

export {
    createUserValidation,
    loginUserValidation,
    getUserValidation,
    updateUserValidation
}