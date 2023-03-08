const Joi = require('joi');

const schemas = {
    post: Joi.object({
        value: Joi.number().integer().required(),
        content: Joi.string().required(),
        house_id: Joi.number().integer(),
        student_id: Joi.number().integer(),
    }).required(),
    patch: Joi.object({
        value: Joi.number().integer().required(),
        content: Joi.string().required(),
        house_id: Joi.number().integer(),
        student_id: Joi.number().integer(),
    }).required(),
};

module.exports = schemas