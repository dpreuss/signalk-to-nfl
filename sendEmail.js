const nodemailer = require('nodemailer');

async function sendEmail(options) {
    const mail = nodemailer.createTransport({
        service: options.emailService,
        auth: {
            user: options.user,
            pass: options.password,
        }
    });
    var mailOptions = {
        from: options.from,
        to: options.to,
        subject: `PW ${(new Date()).toISOString()}`,
        text: options.lat,options.lon
    };
    await mail.sendMail(mailOptions);
}

module.exports = sendEmail;
