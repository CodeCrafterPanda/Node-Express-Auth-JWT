const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// --------------------------------------------------------------------------------------------------------------
// Connect to DB
dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB!')
);
// --------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------
// Middleware
app.use(express.json());
// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// Route Middleware
app.use(require('./controllers'));
// --------------------------------------------------------------------------------------------------------------
app.listen(5000, () => console.log('Server Up and Running...'));
// --------------------------------------------------------------------------------------------------------------
