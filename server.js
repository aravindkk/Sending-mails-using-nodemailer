var express=require('express');
var multer=require('multer');
var app=express();
app.use(multer({ dest: './uploads/'}));
var bodyParser=require('body-parser');
var http=require('http');
var server=http.createServer(app);
var fs=require('fs');
var nodemailer=require('nodemailer');

var application_root=__dirname,
    path=require('path');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_mail_id@gmail.com',
        pass: 'your_password'
    }
});


app.use(bodyParser());


app.get('/',function(req,res)
{
 res.sendfile('index.html');
});


app.get('/send', function(req,res){
 res.sendfile('index.html');
});

app.post('/send', function(req,res){
 console.log(req.body.letter);
 var mailOptions = {
    from: 'Love Letters ✔ <foo@blurdybloop.com>', // sender address
    to: 'aravindbharathykk@gmail.com, myscrapbookofpeople@gmail.com, '+req.body.mailid, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>'+req.body.letter+'</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
        res.send('Your mail was sent');
    }
});
});

var port=process.env.PORT || 5000;
server.listen(port);
console.log("Listening on "+port);
