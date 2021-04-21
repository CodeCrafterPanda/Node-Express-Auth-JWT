const router = require('express').Router();
// All Routes
router.use('/api/user', require('./Auth/auth'));
router.use('/api/blogs', require('./Blog/blogs'));
module.exports = router;
