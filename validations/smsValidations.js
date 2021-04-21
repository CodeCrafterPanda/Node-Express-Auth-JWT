// Validation User Schema
const Joi = require('@hapi/joi');

const smsValidation = data => {
  const registerSchema = Joi.object({
    mobileNo: Joi.string()
      .length(10)
      .required(),
    message: Joi.string()
      .min(6)
      .required()
  });
  return registerSchema.validate(data);
};

module.exports.smsValidation = smsValidation;
