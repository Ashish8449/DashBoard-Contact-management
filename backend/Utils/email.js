// // const nodemailer = require("nodemailer");
// const sendEmail = async (options) => {
//   let mailTransporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "56288_ashishgururani@gbpuat-tech.ac.in",
//       pass: "ashish@12345",
//     },
//   });

//   let mailDetails = {
//     from: "56288_ashishgururani@gbpuat-tech.ac.in",
//     to: "ashishgururani8449@gmail.com",
//     subject: "Test mail",
//     text: "Node.js testing mail for GeeksforGeeks",
//   };

//   mailTransporter.sendMail(mailDetails, function(err, data) {
//     if (err) {
//       console.log(err);
//       console.log("Error Occurs");
//     } else {
//       console.log("Email sent successfully");
//     }
//   });
// };

// const nodemailer = require("nodemailer");

// module.exports = sendEmail;
const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const emailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.email,
    text: options.message,
    subject: options.subject,
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
