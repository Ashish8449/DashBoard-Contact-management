const Contact = require("../Model/contactModel");
const APIFeatures = require("../Utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../Utils/catchAsync");
const { uploadToCloudinary } = require("./cloudinaryController");

exports.create = catchAsync(async (req, res) => {
  const { phoneNumber } = req.body;

  const oldContact = await Contact.find({
    $and: [{ userId: req.user._id }, { phoneNumber }],
  });

  if (oldContact.length) {
    throw new AppError("this contact number is already exist", 400);
  }
  const newContactObj = req.body;
  newContactObj.userId = req.user._id;
  newContactObj.parentId = req.user._id;
  if (req.file) {
    const result = await uploadToCloudinary(req.file.path);
    newContactObj.photo = result && result.url;
    if (!result) throw new AppError("Image upload failed");
  }

  const contact = await Contact.create(newContactObj);
  contact.save();
  res.status(201).send({
    status: "success",
    data: contact,
  });
});

exports.update = catchAsync(async (req, res) => {
  const { id } = req.params;

  if (!req.body) {
    throw new AppError("please provide  data ");
  }
  if (req.file) {
    const result = await uploadToCloudinary(req.file.path);
    req.body.photo = result && result.url;
    if (!result) throw new AppError("Image upload failed");
  }

  await Contact.findByIdAndUpdate(id, req.body);

  res
    .status(200)
    .json({ status: "success", message: "Contact updated successfully" });
});

exports.remove = catchAsync(async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res
    .status(200)
    .json({ status: "success", message: "Contact deleted successfully" });
});

exports.getContacts = catchAsync(async (req, res) => {
  let filter = {};
  filter = { userId: req.user._id };

  const features = new APIFeatures(Contact.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const doc = await features.query;

  res.status(200).json({ status: "success", result: doc.length, data: doc });
});
