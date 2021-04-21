const { verifyJWT } = require('../services');

module.exports = function(req, res, next) {
  // Check if Token exists in header
  console.log('breaking')
  const token = req.header('auth-token');
  console.log(token);
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = verifyJWT(token);
    req.user = verified._id;
    next();
  } catch (err) {
    res
      .status(400)
      .send(
        'You are not authorized to perform this operation OR You need to Login again.'
      );
  }
};
