const fs = require('fs');
const path = require('path');
// -----------------------------------------------------------------------------
const privateKey = fs.readFileSync(path.resolve('./keys/private.key'), 'utf8');
const publicKey = fs.readFileSync(path.resolve('./keys/public.key'), 'utf8');
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
let signOptions = {
  algorithm: 'RS256'
};

let verifyOptions = {
  algorithms: ['RS256']
};
// -----------------------------------------------------------------------------

const jwt = require('jsonwebtoken');
// create jwt Token
const createJWT = (data, time = '24h') => {
  signOptions.expiresIn = time;
  const token = jwt.sign(data, privateKey, signOptions);
  return token;
};
// verify jwt Token
const verifyJWT = (data, time = '24h') => {
  verifyOptions.maxAge = time;
  const verified = jwt.verify(data, publicKey, verifyOptions);
  return verified;
};

module.exports.createJWT = createJWT;
module.exports.verifyJWT = verifyJWT;
