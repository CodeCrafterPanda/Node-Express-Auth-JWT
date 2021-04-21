const AdminUser = require('../../models/AdminUser');
const { createHashedPassword } = require('../../services');
// ------------------------  Create New Admin User ---------------------------------------
const createNewAdminUser = async data => {
  // Extract Data
  const { name, email, password, role } = data;
  // Hash Password
  const hashedPassword = await createHashedPassword(password);
  const user = new AdminUser({
    name,
    email,
    password: hashedPassword,
    role
  });
  const savedUser = await user.save();
  return savedUser;
};

//------------------------- Find Admin User by Email -------------------------------------
const findAdminUserByEmail = async data => {
  const user = await AdminUser.findOne({ email: data });
  return user;
};
//------------------------- Find Admin User by Id -------------------------------------
const findAdminUserById = async data => {
  const user = await AdminUser.findOne({ _id: data });
  return user;
};

module.exports.createNewAdminUser = createNewAdminUser;
module.exports.findAdminUserByEmail = findAdminUserByEmail;
module.exports.findAdminUserById = findAdminUserById;
