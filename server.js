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

// Endpoint pentru formularul de contact
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
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Something went wrong. Please try again later.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).send({ success: true, message: 'Message sent successfully!' });
  });
});

// Endpoint pentru aplicația de spațiu
app.post('/api/space-application', (req, res) => {
  const {
    firstName,
    lastName,
    organization,
    organizationName,
    phone,
    date,
    email,
    eventName,
    eventDescription,
    startTime,
    endTime,
    participants,
    agreement
  } = req.body;

  // Logare pentru debugging
  console.log('Received data:', req.body);

  // Validarea datelor
  if (!firstName || !lastName || !organization || !organizationName || !phone || !date || !email || !eventName || !eventDescription || !startTime || !endTime || !participants || !agreement) {
    return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii și trebuie completate corect.' });
  }

  // Configurarea emailului pentru aplicația de spațiu
  const mailOptions = {
    from: process.env.OUTLOOK_EMAIL,
    to: 'tomacnatalia95@gmail.com', // Înlocuiește cu adresa dorită
    subject: 'New Space Application',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Organization: ${organization}
      Organization Name: ${organizationName}
      Phone: ${phone}
      Date: ${date}
      Email: ${email}
      Event Name: ${eventName}
      Event Description: ${eventDescription}
      Start Time: ${startTime}
      End Time: ${endTime}
      Participants: ${participants}
      Agreement: ${agreement ? 'Yes' : 'No'}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Something went wrong. Please try again later.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).send({ success: true, message: 'Application received successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
