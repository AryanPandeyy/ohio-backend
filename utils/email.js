const nodemailer = require('nodemailer');
require('dotenv').config();

//development pulpose

const sendEmail = async (options) => {
  //1) create a transporter (we are using mailtrap as a servoce)

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  //less secure development
  //2) define email options
  const mailOptions = {
    from: 'kundusubhajit72@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message
    //html: options.html
  };
  //3) Actually send mail

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
