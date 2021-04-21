const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024
    },
    role: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('AdminUser', adminUserSchema);
