let nodemailer = require('nodemailer');
let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'wildcircus',
    timezone : 'Z'
});

exports = module.exports = {};

let transporter = nodemailer.createTransport({
    host: 'enderland.fr',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'wildcircus@xenonwitch.fr',
        pass: 'testtest666666420'
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendMail = function(identity, email, content, callback){
    let mailOptions = {
        from: `"${identity}" <${email}>`, // sender address
        to: "steve.labus@icloud.com", // list of receivers
        subject: `WildCircus: mail contact de ${identity}`, // Subject line
        text: content, // plain text body
        html: content // html body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            callback(false);
            console.log(err);
            console.log(info);
        }else{
            connection.query(`INSERT INTO mails (sender, email, content) VALUES ("${identity}", "${email}", "${content}")`, function(error, results, fields){
                if(error){
                    callback(false);
                    console.log(error);
                }else{
                    callback(true);
                }
            })
        }
    });
};





