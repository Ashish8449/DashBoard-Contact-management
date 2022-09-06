const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const validatePhoneNumber = require('validate-phone-number-node-js')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      trim: true,
      required: [true, 'Please tell us your name!'],
    },
    email: {
      type: String,
      requried: true,

      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: {
      type: String,
      default:
        'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },

    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
    phoneNumber: {
      type: String,

      trim: true,
      required: [true, 'Please provide a password'],
      validate: [
        validatePhoneNumber.validate,
        'Please provide a valid phone number',
      ],
    },

    passwordChangedAt: {
      type: Date,
      default: new Date(),
    },

    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
)
userSchema.pre('save', async function(next) {
  console.log('yes')
  if (!this.isModified('password')) return next()
  console.log('yes')
  // console.log(this);
  // this.passwordChangedAt = Date.now();
  this.password = await bcrypt.hash(this.password, 12)

  next()
})
userSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true
  next()
})
userSchema.methods.createResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex')

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000

  return resetToken
}

const User = mongoose.model('User', userSchema)

module.exports = User
