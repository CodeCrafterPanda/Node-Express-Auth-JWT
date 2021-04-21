const {
  createHashedPassword,
  compareHashedPassword
} = require('./bcryptService');
const { createJWT, verifyJWT } = require('./jwtService');
const { sendSMS } = require('./smsService');

module.exports.createHashedPassword = createHashedPassword;
module.exports.compareHashedPassword = compareHashedPassword;
module.exports.createJWT = createJWT;
module.exports.verifyJWT = verifyJWT;
module.exports.sendSMS = sendSMS;
