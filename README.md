Sending mails is one of the routine things any website would want to do. You could send newletter to your subscribers or you could use it to verify a user's account or you could send a mail to help someone recover their password. Either way, sending mails is fundamental and we need a simple way to do so. Fortunately node-mailer does just that. To use this demo, you would need a gmail id and it's password. You can customize the subject, from name, and the body of the e-mail.

Quick Start
-----------

1.) Fork this repo

2.) Replace the noted details in the file server.js in the part mentioned below:

    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_mail_id@gmail.com',
        pass: 'your_password'
        }
    });

    It's best to not use your personal mail id for this, for obvious reasons.

3.) Install the dependencies through:

    npm install

4.) Run the app:

    node server.js

5.) Open your browser and go to:

    localhost:5000

