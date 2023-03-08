const Joi = require('joi');

const schemas = {
    patch: Joi.object({
        name: Joi.string().required(),
        score: Joi.number().integer(),
        name_in_english: Joi.string(),
    }).required(),
};

module.exports = schemas;