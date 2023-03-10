const Joi = require('joi');

const schemas = {
    patch: Joi.object({
        name: Joi.string().required(),
        score: Joi.number().integer(),
        name_in_english: Joi.string(),
        user_id: Joi.number().integer().required(),
    }).required(),
};

module.exports = schemas;