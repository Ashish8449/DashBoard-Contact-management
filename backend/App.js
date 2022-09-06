const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const mongoSanitize = require("express-mongo-sanitize");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controller/errorController");
const AuthRoutes = require("./Routes/AuthRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const ContactRoutes = require("./Routes/ContactRoutes");
const { authorization } = require("./Controller/authController");
// const fileUpload = require("express-fileupload");
const cloudinary = require("./Utils/cloudinary");
const app = express();

// 1) GLOBAL MIDDLEWARES

app.use(morgan("dev"));

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Serving static files
app.use(express.static(`${__dirname}/public`));

// 3) ROUTES

app.use("/api", AuthRoutes);

//  after that all routes should be authorized
// app.use(authorization);
app.use("/api/user", UserRoutes);
app.use("/api/contact", ContactRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
