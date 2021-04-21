const router = require('express').Router();
const {
  createNewAdminUser,
  findAdminUserByEmail
} = require('../../data/adminUser/adminUserData');
const { compareHashedPassword, createJWT } = require('../../services');
const { registerValidation, loginValidation } = require('../../validations');

// --------------------- Register User ----------------------------------------------
router.post('/register', async (req, res, next) => {
  // Lets Validate Data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check if the user is already in the database
  const user = await findAdminUserByEmail(req.body.email);
  if (user) return res.status(400).send('Email already in use.');
  // Try to create new user
  try {
    const savedUser = await createNewAdminUser(req.body);
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
// --------------------- Login User ----------------------------------------------
router.post('/login', async (req, res, next) => {
  // Lets Validate Data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Check if the user is in the database
  const user = await findAdminUserByEmail(req.body.email);
  if (!user) return res.status(400).send('User not found!');
  // Check if Password is Correct
  const validPass = await compareHashedPassword(
    req.body.password,
    user.password
  );
  if (!validPass) return res.status(400).send('Invalid Password!');
  // Create and assign token
  const token = await createJWT({ _id: user._id });
  res.header('auth-token', token).send(token);
});

module.exports = router;
