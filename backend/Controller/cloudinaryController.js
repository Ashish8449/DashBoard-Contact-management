const catchAsync = require("../Utils/catchAsync");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");
exports.uploadToCloudinary = async function(locaFilePath) {
  // locaFilePath: path of image which was just
  // uploaded to "uploads" folder

  var mainFolderName = "main";
  // filePathOnCloudinary: path of image we want
  // to set when it is uploaded to cloudinary
  var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

  return cloudinary.uploader
    .upload(locaFilePath, { public_id: filePathOnCloudinary })
    .then((result) => {
      // Image has been successfully uploaded on
      // cloudinary So we dont need local image
      // file anymore
      // Remove file from local uploads folder
      fs.unlinkSync(locaFilePath);

      return {
        message: "Success",
        url: result.url,
      };
    })
    .catch((error) => {
      // Remove file from local uploads folder
      fs.unlinkSync(locaFilePath);
      return { message: "Fail" };
    });
};
