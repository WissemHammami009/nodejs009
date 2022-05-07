var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
  service: 'gmail',
  host:"smtp.gmail.com",
  auth: {
    user: 'hammamiwissem21@gmail.com',
    pass: 'dviooqohijdxsnft'
  }
});
let from =  "Confirmation <******@mail.com>"
var mailOptions = {
  from: from,
  to: 'me@wissem-hammami.ovh',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});