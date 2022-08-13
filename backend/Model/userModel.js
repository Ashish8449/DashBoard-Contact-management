const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const validatePhoneNumber = require("validate-phone-number-node-js");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      trim: true,
      required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      requried: true,

      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    photo: {
      type: String,
      default: "default.jpg",
    },

    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      select: false,
    },
    phoneNumber: {
      type: String,

      trim: true,
      required: [true, "Please provide a password"],
      validate: [
        validatePhoneNumber.validate,
        "Please provide a valid phone number",
      ],
    },

    passwordChangedAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});
userSchema.pre("findOneAndUpdate", function(next) {
  this.options.runValidators = true;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
