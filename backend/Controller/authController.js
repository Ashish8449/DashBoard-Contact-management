const catchAsync = require('../Utils/catchAsync')
const User = require('../Model/userModel')
const AppError = require('../utils/appError')
const sendEmail = require('./../utils/email')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { uploadToCloudinary } = require('./cloudinaryController')
const signToken = (id) => {
  return jwt.sign({ id }, process.env.Access_TOKEN_SECRET, {
    expiresIn: '1h',
  })
}

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id, { expiresIn: 60 * 60 })

  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }
  cookieOptions.secure = true

  res.cookie('jwt', token, cookieOptions)

  // Remove password from output
  // user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.signup = catchAsync(async (req, res) => {
  const { name, email, phoneNumber, password } = req.body
  const userObj = { name, email, phoneNumber, password }

  const user = await User.find({ $or: [{ email }, { phoneNumber }] })

  if (user.length) {
    if (user[0].phoneNumber === phoneNumber) {
      throw new AppError('Phone number is already in exists', 310)
    }
    if (user[0].email === email) {
      throw new AppError('Email number is already in exists', 310)
    }
    throw new AppError('This user already exists', 310)
  }
  if (req.file) {
    const result = await uploadToCloudinary(req.file.path)
    userObj.photo = result && result.url
    if (!result) throw new AppError('Image upload failed')
  }

  const newUser = await User.create(userObj)

  await newUser.save()
  createSendToken(newUser, 201, res)
})

exports.login = catchAsync(async (req, res) => {
  const { email, phoneNumber, password } = req.body
  console.log(req.body)

  if (!email && !phoneNumber) {
    throw new AppError('Please provide a email or a phone number', 400)
  }

  let user
  if (email) user = await User.findOne({ email }).select('+password')
  if (phoneNumber)
    user = await User.findOne({ phoneNumber }).select('+password')

  if (!user) {
    throw new AppError(
      'user not exists please provide valid phone number and email',
      400
    )
  }
  console.log(password)
  console.log(await bcrypt.compare(password, user.password))

  if (!(await bcrypt.compare(password, user.password))) {
    throw new AppError('Password did not match', 401)
  }

  createSendToken(user, 200, res)
})

exports.authorization = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there

  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }
  console.log(token)

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    )
  }

  //   // 2) Verification token
  const decoded = jwt.verify(token, process.env.Access_TOKEN_SECRET)

  const expires = new Date(decoded.exp)
  if (expires.getTime() < new Date().getTime()) {
    new AppError(' this token is already expires Please login again 👍', 401)
  }

  //   // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id)
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    )
  }

  req.user = currentUser
  next()
})

exports.forgetPassword = async (req, res, next) => {
  if (!req.body.email)
    return next(new AppError('Please provide your email address', 401))
  const user = await User.findOne({ email: req.body.email })

  if (!user)
    return next(new AppError('No user found with this email address', 404))

  const resetToken = user.createResetToken()
  await user.save({ validateBeforeSave: false })

  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/api/resetPassword/${resetToken}`
  const message = `Forgot password? Send a patch request with your new password to the url: ${resetUrl}.`

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    })

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    })
  } catch (err) {
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save({ validateBeforeSave: false })

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    )
  }
}
exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex')
    console.log(hashedToken)
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      // email: "ashishgururani8449@gmail.com",
    })
    console.log(user)

    if (!user) return next(new AppError('Token is invalid or has expired', 400))
    if (!req.body.password)
      return next(
        new AppError('Please provide the new password to be set', 401)
      )

    user.password = req.body.password
    // user.passwordResetToken = undefined;
    // user.passwordResetExpires = undefined;
    await user.save()

    createSendToken(user, 200, res)
  } catch (err) {
    next(err)
  }
}
