const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dqdgppbp3",
  api_key: "915762668153269",
  api_secret: "E-WxCBJGqqCiPx3R4NHhTzYJB-k",
});
async (req, res, next) => {
  // req.file is the `profile-file` file
  // req.body will hold the text fields,
  // if there were any

  // req.file.path will have path of image
  // stored in uploads folder
  var locaFilePath = req.file.path;

  // Upload the local image to Cloudinary
  // and get image url as response
  var result = await uploadToCloudinary(locaFilePath);

  // Generate html to display images on web page.
  var response = buildSuccessMsg([result.url]);

  return res.send(response);
};
module.exports = cloudinary;
