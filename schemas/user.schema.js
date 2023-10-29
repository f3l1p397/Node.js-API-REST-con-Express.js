const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const sexo = Joi.string().min(4).max(6);
const number = Joi.number().integer().min(7).max(10);

const createUserSchema = Joi.object({
  name: name.required(),
  sexo: sexo.required(),
  number: number.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  sexo: sexo,
  number: number,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
