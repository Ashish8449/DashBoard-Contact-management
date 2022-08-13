const { v4 } = require("uuid");
const multer = require("multer");
const AppError = require("./appError");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // file name
    const ext = file.mimetype.split("/")[1];
    cb(null, `${v4()}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] == "image") {
    cb(null, true);
  } else {
    cb(new AppError("Not an img !", 400), false);
  }
};
exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
