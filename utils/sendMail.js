const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (user) => {
  const message = {
    from: 'margiaryan@gmail.com',
    to: `${user.secretaryEmail}`,
    subject: `Approving  user having name ${user.firstName}✔`,
    html: `<p><b>Hello</b></p>
        <p>Approve this user with userId ${user._id}</p>`
    // text: 'Hi from your nodemailer project'
  };
  console.log('USER, ', user);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  await transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
    }

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    // transporter.close();
  });
};

const sendVerificationMail = async (user) => {
  const message = {
    from: 'margiaryan@gmail.com',
    to: `${user.email}`,
    subject: `Email Verification`,
    html: `<p><b>Hello</b> ${user.name}</p>
        <p>Your email has Verified</p>
        <br>
        <p>Please click on below link for fill details</p>
        <a href="http://localhost:5173/signup">Fill Details</a>
        `
    // text: 'Hi from your nodemailer project'
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  await transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
    }

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    // transporter.close();
  });
};

const sendOTPMail = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'margiaryan@gmail.com',
      to: email,
      subject: title,
      html: body
    });
    console.log('Email info: ', info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { sendMail, sendOTPMail, sendVerificationMail };
