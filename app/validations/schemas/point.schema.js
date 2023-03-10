const Joi = require('joi');

const schemas = {
    post: Joi.object({
        value: Joi.number().integer().required(),
        content: Joi.string().required(),
        house_id: Joi.number().integer(),
        student_id: Joi.number().integer(),
        user_id: Joi.number().integer().required(),
    }).required(),
    patch: Joi.object({
        value: Joi.number().integer().required(),
        content: Joi.string().required(),
        house_id: Joi.number().integer(),
        student_id: Joi.number().integer(),
        user_id: Joi.number().integer().required(),
    }).required(),
};

module.exports = schemas