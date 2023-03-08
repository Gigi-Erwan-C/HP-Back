const Joi = require('joi');

const schemas = {
    post: Joi.object({
        lastname: Joi.string().required(),
        firstname: Joi.string().required(),
        class_name: Joi.string(),
        score: Joi.number().integer(),
        house_id: Joi.number().integer(),
    }).required(),
    patch: Joi.object({
        lastname: Joi.string().required(),
        firstname: Joi.string().required(),
        class_name: Joi.string(),
        score: Joi.number().integer(),
        house_id: Joi.number().integer(),
    }).required(),
};

module.exports = schemas;
