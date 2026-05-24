const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user: process.env.USER,
            pass:process.env.PASS
        }
    }
);

const sendEmail =  function(name,email,message) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            to: 'sumukhasureban@gmail.com',
            subject: `Hey I am ${name} and mailid is ${email}`,
            html: `<p>${message}</p>`
        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return reject(error);  // Reject the promise with the error
            }
            console.log('Email sent:', info.response);
            resolve(info.response);  // Resolve the promise with the response
        });
    });
}

module.exports = sendEmail;


