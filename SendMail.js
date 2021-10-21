const nodemailer = require("nodemailer");

let dirigido = {
    fromEmail: '',
    fromName: 'Administrador'
}

const sendMail = async (subject, sendTo, BodyText, attachments, cc='', port= 465, auth={}, host='', from=dirigido) => {

    try {
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: true,
            auth
        });


        let mailOptions = {
            from: '"'+ from.fromName +'" <'+ from.fromEmail +'>',
            to: sendTo.toString(),
            cc,
            subject: subject,
            html: BodyText,
            //attachments
        }


        const resTransporter = await transporter.sendMail(mailOptions).then(info => {
            //console.log("SENT MAIL "+info.response);
            arrayRes = {
                success: true,
                msg:info.response
            };
            return arrayRes;
        });

        return resTransporter;

    } catch (error) {
        arrayRes = {
            success: false,
            error: error
        };
        return arrayRes;
    }
}

module.exports = sendMailZ;
