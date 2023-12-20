const nodemailer = require("nodemailer");


let message = {
  from: "example@gmail.com",
  to: `${user.secretaryEmail}`,
  subject:
    `Approving  user having ${user.firstName} with ID ${user._id}✔` +
    Date.now(),
  html: `<p><b>Hello</b></p>
        <p>Approve this user ${user._id}</p>`,
  // text: 'Hi from your nodemailer project'
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log("Error occurred");
    console.log(error.message);
  }

  console.log("Message sent successfully!");
  console.log(nodemailer.getTestMessageUrl(info));

  // only needed when using pooled connections
  // transporter.close();
});
