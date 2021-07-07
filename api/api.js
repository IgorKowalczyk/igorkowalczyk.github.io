const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.enable("trust proxy");
app.use((req, res, next) => {
 req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.post("/", async (req, res) => {
 if (req.body.type === "contact") {
  try {
   const name = req.body.username.substr(0, 100);
   if (!name) return res.status(400) && console.log("Name field is empty!");
   const email = req.body.email.substr(0, 100);
   if (!email) return res.status(400) && console.log("Email field is empty!");
   const message = req.body.msg.substr(0, 2000);
   if (!message) return res.status(400) && console.log("Message field is empty!");
   const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
     user: process.env.EMAIL,
     pass: process.env.EMAIL_PASSWORD,
    },
   });
   const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `[Contact Form] ${name} send you message!`,
    html: `<h1>Hi! ${name} just send you message! Please check it out.</h1><p>Message: ${message}</p>\n<p>E-Mail: ${email}</p>`,
   };
   transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
     console.log(error);
    } else {
     console.log("📬 Email sent: " + info.response);
    }
   });
  } catch (err) {
   return res.status(400);
  }
 } else {
  res.status(400);
 }
});

app.listen(process.env.PORT, () => {
 console.log("🚀 API Ready on port " + process.env.PORT + "!");
});
