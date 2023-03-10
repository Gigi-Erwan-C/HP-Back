const Joi = require('joi');

const schemas = {
  post: Joi.object({
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    class_name: Joi.string(),
    score: Joi.number().integer(),
    house_id: Joi.number().integer(),
    user_id: Joi.number().integer().required(),
  }).required(),
  patch: Joi.object({
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    class_name: Joi.string(),
    score: Joi.number().integer(),
    house_id: Joi.number().integer(),
    user_id: Joi.number().integer().required(),
  }).required(),
};

module.exports = schemas;
