// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true pentru port 465
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.OUTLOOK_EMAIL,
    to: 'tomacnatalia95@gmail.com', // Înlocuiește cu o adresă reală
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Something went wrong. Please try again later.' });
    }
    res.status(200).send({ success: true, message: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
