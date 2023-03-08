const Joi = require('joi');

const schemas = {
    post: Joi.object({
        email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
        password: Joi.string().required(),
    }).required(),
};

module.exports = schemas