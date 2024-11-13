const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thecarbontrace@gmail.com', // Replace with your Gmail address
        pass: 'dtgw qzvl kydw xlzs', // Replace with your Gmail password
    },
});

module.exports = transporter;