const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL, PASSWORD } = process.env;

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${EMAIL}`,
      pass: `${PASSWORD}`,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: `${EMAIL}`,
    subject: `Message from Portfolio: ${req.body.email}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
