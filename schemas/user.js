const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Others'],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    // user_type: {
    //   type: String,
    //   enum: ['Admin', 'User'],
    //   required: true,
    // },
    createdAt: {
      type: Number,
    },
    updatedAt: {
      type: Number,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

module.exports = mongoose.model('user', userSchema);
