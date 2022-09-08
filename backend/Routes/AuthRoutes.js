const express = require('express')

const router = express.Router()
const {
  login,
  signup,
  forgetPassword,
  resetPassword,
} = require('../Controller/authController')
const { uploadImage } = require('../Controller/cloudinaryController')

const { upload } = require('../Utils/uploadImage')

router.post(
  '/signup',
  upload.single('photo'),

  signup
)
router.post('/login', login)
router.patch('/forgetPassword', forgetPassword)
router.post('/resetPassword/:token', resetPassword)
module.exports = router
