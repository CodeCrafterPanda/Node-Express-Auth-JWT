// Validation User Schema
const Joi = require('@hapi/joi');
const registerValidation = data => {
  const registerSchema = Joi.object({
    name: Joi.string()
      .min(5)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    role: Joi.string().required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .pattern(
        new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})'
        )
      )
      .required()
      .messages({
        'string.pattern.base': `"password" must contain at least 1 lowercase, 1 uppercase, 1 numeric & 1 special character`
      })
  });
  return registerSchema.validate(data);
};

const loginValidation = data => {
  const loginSchema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return loginSchema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
