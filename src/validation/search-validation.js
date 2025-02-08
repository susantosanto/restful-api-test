import Joi from "joi";

const searchNameValidation = Joi.string().required();
const searchNimValidation = Joi.string().min(10).required();
const searchYmdValidation = Joi.string().min(8).required();

export {
    searchNameValidation,
    searchNimValidation,
    searchYmdValidation
}