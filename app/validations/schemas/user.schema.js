const Joi = require('joi');

const schemas = {
  post: Joi.object({
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
    password: Joi.string().required(),
    role_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
  }).required(),
  patch: Joi.object({
    lastname: Joi.string().required(),
    firstname: Joi.string().required(),
    email: Joi.string().pattern(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).required(),
    role_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
  }).required(),
  patchPasswordAdmin: Joi.object({
    password: Joi.string().required(),
    user_id: Joi.number().integer().required(),
  }).required(),
  patchPasswordUser: Joi.object({
    oldPassword: Joi.string().required(),
    password: Joi.string().required(),
    confirmation: Joi.string().required(),
    user_id: Joi.number().integer().required(),
  }).required(),
};

module.exports = schemas;
