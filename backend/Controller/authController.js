const catchAsync = require("../Utils/catchAsync");
const User = require("../Model/userModel");
const AppError = require("../utils/appError");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { uploadToCloudinary } = require("./cloudinaryController");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.Access_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  const userObj = { name, email, phoneNumber, password };

  const user = await User.find({ $or: [{ email }, { phoneNumber }] });

  if (user.length) {
    if (user[0].phoneNumber === phoneNumber) {
      throw new AppError("Phone number is already in exists", 310);
    }
    if (user[0].email === email) {
      throw new AppError("Email number is already in exists", 310);
    }
    throw new AppError("This user already exists", 310);
  }
  if (req.file) {
    const result = await uploadToCloudinary(req.file.path);
    userObj.photo = result && result.url;
    if (!result) throw new AppError("Image upload failed");
  }

  const newUser = await User.create(userObj);

  await newUser.save();
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res) => {
  const { email, phoneNumber, password } = req.body;

  if (!email || !phoneNumber) {
    throw new AppError("Please provide a email or a phone number", 400);
  }

  let user;
  if (email) user = await User.findOne({ email }).select("+password");
  if (phoneNumber)
    user = await User.findOne({ phoneNumber }).select("+password");

  if (!user) {
    throw new AppError(
      "user not exists please provide valid phone number and email",
      400
    );
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new AppError("Password did not match", 401);
  }

  createSendToken(user, 200, res);
});

exports.authorization = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  //   // 2) Verification token
  const decoded = jwt.verify(token, process.env.Access_TOKEN_SECRET);

  const expires = new Date(decoded.exp);
  if (expires.getTime() < new Date().getTime()) {
    new AppError(" this token is already expires Please login again 👍", 401);
  }

  //   // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  req.user = currentUser;
  next();
});

exports.forgetPassword = (req, res) => {
  res.status(2).json({
    status: "sucess",
    message: "currently working on on this side",
  });
};
