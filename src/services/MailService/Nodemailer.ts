import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    secure: true,
    port: 465,
    auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD
    }
});

function html(url: string, host: string, email: string) {
    const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`;
    const escapedHost = `${host.replace(/\./g, '&#8203;.')}`;

    const backgroundColor = '#f9f9f9';
    const textColor = '#444444';
    const mainBackgroundColor = '#ffffff';
    const buttonBackgroundColor = '#346df1';
    const buttonBorderColor = '#346df1';
    const buttonTextColor = '#ffffff';

    return `
    <body style="background: ${backgroundColor};">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            <strong>${escapedHost}</strong>
          </td>
        </tr>
      </table>
      <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            Logar como <strong>${escapedEmail}</strong>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Logar</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            Se você não requisitou esse email, ignore-o.
          </td>
        </tr>
      </table>
    </body>
    `;
}

export function sendMail(url: string, host: string, to: string) {
    console.log(process.env.VERCEL_URL);
    const mailOptions = {
        from: process.env.ZOHO_USER,
        to,
        subject: 'Fazer login',
        html: html(url, host, to)
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
    });
}
