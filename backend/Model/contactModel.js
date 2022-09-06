const mongoose = require('mongoose')
const validator = require('validator')
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },

    photo: {
      type: String,
      default: 'default.img',
    },
    phoneNumber: {
      type: String,
      match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      required: [true, 'Please provide phonenumber'],
    },
    category: {
      type: String,
      enu: ['Personal', 'Business', 'Other'],
      default: 'Personal',
    },
    favourite: {
      type: Boolean,
      default: false,
    },
    associatedCompany: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)
contactSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true
  next()
})
const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
