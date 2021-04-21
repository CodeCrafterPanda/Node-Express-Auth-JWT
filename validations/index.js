// Validation User Schema
const { registerValidation, loginValidation } = require('./authValidations');
const { smsValidation } = require('./smsValidations');

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.smsValidation = smsValidation;
