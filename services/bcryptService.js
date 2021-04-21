const bcrypt = require('bcryptjs');
// Hash Password
const createHashedPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
// Compare Password
const compareHashedPassword = async (password1, password2) => {
  const validPass = await bcrypt.compare(password1, password2);
  return validPass;
};

module.exports.createHashedPassword = createHashedPassword;
module.exports.compareHashedPassword = compareHashedPassword;
