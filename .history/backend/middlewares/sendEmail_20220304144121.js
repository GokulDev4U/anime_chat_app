const nodeMailer = require('nodemailer');


exports.sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({});

    const mailOptions = {
        from: '"NodeMailer"<>',
        to: options.to,
        subject: options.subject,
        text: options.text,
    }
