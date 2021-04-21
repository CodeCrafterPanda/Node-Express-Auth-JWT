const jwtMiddleware = require('./jwtMiddleware');
const blogAuthMiddleware = require('./blogAuthMiddleware');

module.exports.jwtMiddleware = jwtMiddleware;
module.exports.blogAuthMiddleware = blogAuthMiddleware;
