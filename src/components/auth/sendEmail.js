const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const msg = {
    to: user.email,
    from: 'your-email@example.com',
    subject: 'Welcome to the System',
    text: `Hello ${user.displayName || user.email}, welcome to our system! Your auto-generated password is: ${user.password}`,
  };

  return sgMail.send(msg)
    .then(() => console.log('Email sent'))
    .catch((error) => console.error('Error sending email:', error));
});
