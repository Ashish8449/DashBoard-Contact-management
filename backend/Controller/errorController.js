const AppError = require("../utils/appError");

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);
  // console.log(err.message);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  sendErrorProd(err, res);
};
