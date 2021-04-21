const { findAdminUserById } = require('../data/adminUser/adminUserData');
module.exports = async function(req, res, next) {
  const CREATE = ['Author', 'Admin'];
  const READ = [];
  const UPDATE = ['Author', 'Admin'];
  const DELETE = ['Admin'];
  const user = await findAdminUserById(req.user);
  // --------------------- Checking Request Type ------------------------
  if (req.method === 'GET') return next();
  // --------------------- Checking User Exists Or not ------------------
  if (!user) return res.status(400).send('Access Denied.');
  // --------------------- Checking Authorization -----------------------
  switch (req.method) {
    case 'POST':
      CREATE.includes(user.role)
        ? next()
        : res.status(400).send('Access Denied.');
      break;
    case 'PATCH':
      UPDATE.includes(user.role)
        ? next()
        : res.status(400).send('Access Denied.');
      break;
    case 'DELETE':
      DELETE.includes(user.role)
        ? next()
        : res.status(400).send('Access Denied.');
      break;
  }
};
