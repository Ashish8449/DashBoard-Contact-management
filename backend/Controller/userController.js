const User = require("../Model/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../Utils/catchAsync");
const bcrypt = require("bcryptjs");

// exports.uploadUserPhoto = upload.single("photo");

exports.update = catchAsync(async (req, res) => {
  const { password, email, phoneNumber } = req.body;

  if (password) {
    throw new AppError("This route is not for updating a password ", 400);
  }
  if (phoneNumber) {
    throw new AppError("you can not update your contanct number", 200);
  }
  const { _id } = req.user;
  if (req.file) {
    const result = await uploadToCloudinary(req.file.path);
    req.body.photo = result && result.url;
    if (!result) throw new AppError("Image upload failed");
  }
  await User.findByIdAndUpdate({ _id }, req.body);
  res
    .status(200)
    .json({ status: "success", message: "User updated successfully" });
});

exports.getMe = (req, res) => {
  res.status(200).json({ status: "success", data: req.user });
};

exports.updatePassword = catchAsync(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (oldPassword === newPassword) {
    throw new AppError("Your Password and new password is same ", 400);
  }
  const id = req.user._id;

  const user = await User.findOne({ _id: id }).select("+password");
  if (!(await bcrypt.compare(oldPassword, user.password))) {
    throw new AppError("Password did not match", 401);
  }

  const password = await bcrypt.hash(newPassword, 12);
  await User.findByIdAndUpdate(id, {
    password,
    passwordChangedAt: new Date(),
  });
  res
    .status(200)
    .json({ status: "success", message: "Password updated successfully" });
});
