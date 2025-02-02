const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sendermail@gmail.com",
    pass: "goolgeappPassword",
  },
});


// for testing
// const sendEmail = async () => {
//   try {
//     const info = await transporter.sendMail({
//       from: '"Curious Developers Community 👻" <sender@gmail.com>', // sender address
//       to: "receiveers@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
//     console.log(info);
//   } catch (error) {
//     console.log(error);
//   }
// };

// sendEmail();

module.exports = transporter;
