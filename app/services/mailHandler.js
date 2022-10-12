const nodemailer = require("nodemailer");
// const moment = require("moment");


const mailHandler = {
    transporter: nodemailer.createTransport({
        host: process.env.HOST_MAIL,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        port: process.env.MAIL_PORT,
    }),

   
    async sendMailContact (body) {
        console.log(body)
        const emailBody = {
            from: 'As Salindres Tennis <mibmae@sfr.fr>',
            // from: body.email,
            to: 'Guigui <webmgdev@gmail.com>',
            // to: 'As Salindres Tennis <contact@salindrestennis.fr>',
            subject: `Nouveau message du site`,
            html: `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nouveau message</title>
                <style>
                    @import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap");
                    html {
                        font-size: 1.5rem;
                        line-height: 1.4;
                    }
                    body {
                        font-family: "ABeeZee", sans-serif;
                    }
                    h1 {
                        font-size: 1.1rem;
                        color: #2980BC;
                    }
                    ul {
                        list-style-type: '★';
                        list-style-position: inside;
                    }
                    li {
                        color: #376c7a;
                    }
                    li span {
                        color: black;
                        font-style: italic;
                    }
                    hr {
                        color: #376c7a;
                        margin-right: 50%;
                    }
                    img {
                        width: 120px;
                    }
                    .image {
                        width: 50%;
                    }
                </style>
            </head>
            <img src="https://salindrestennis.netlify.app/images/b9b3a522d922cc167205c5d56c21b85e.png" class="image">
                <body>
                <h1>Nouveau message depuis le site !</h1>
                <div>${body.nom} vous a envoyer un message : <br />
                    ${body.msg} <br />
                    Son numéro de téléphone est : ${body.tel} <br />
                    Son e-mail : ${body.email}
                </div>
                    </body>
                </html>                
            `,
        };
        mailHandler.sendMailAction(emailBody);
    },

    async sendMailAction (emailBody) {
        await mailHandler.transporter.sendMail(emailBody, (error, info) => {
            if(error){
                return console.log(error);
            } else {
                console.log(`Message sent: ${info.response}`);
                return ('ok');
                
            }
        });
    },

    mailHeader: `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message</title>
        <style>
            @import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap");
            html {
                font-size: 1.5rem;
                line-height: 1.4;
            }
            body {
                font-family: "ABeeZee", sans-serif;
            }
            h1 {
                font-size: 1.1rem;
                color: #2980BC;
            }
            ul {
                list-style-type: '★';
                list-style-position: inside;
            }
            li {
                color: #376c7a;
            }
            li span {
                color: black;
                font-style: italic;
            }
            hr {
                color: #376c7a;
                margin-right: 50%;
            }
            img {
                width: 120px;
            }
            .image {
                width: 50%;
            }
        </style>
    </head>
                        
    `,

};

module.exports = mailHandler;