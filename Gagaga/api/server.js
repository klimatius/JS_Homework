const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
	  fs = require('file-system'),
	  shortId = require('shortid'),
      app = express(),
      nodemailer = require('nodemailer');

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Content-Transfer-Encoding : quoted-printable');
	next();
});


app.post('/api/cards', (req, res) => {
    let email = '',
    cardData  = req.body;

	for(let key in cardData){
		if(key != 'Image')
		email = email + `${key}: ${cardData[key]}\n`;
	}

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "",
            pass: ""
        }
    });

    let mailOptions = {};

    if(cardData['Image'] != undefined){
	    mailOptions = {
	        from: '',
	        to: '',
	        subject: 'Card Info',
	        text: email,
	        attachments: [
	    	{   
	      		filename: 'image.jpg',
	      		content: cardData['Image'].split("base64,")[1],
	      		encoding: 'base64'
	    	}
	  		]
	    };
	} else {
		mailOptions = {
	        from: '',
	        to: '',
	        subject: 'Card Info',
	        text: email
	    };
	}

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
    });
});


app.listen(3000, () => console.log('Server has been started...'));




