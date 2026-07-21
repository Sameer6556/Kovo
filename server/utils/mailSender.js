const nodemailer = require("nodemailer")

// Sends email via Gmail SMTP. Requires a host that permits outbound SMTP
// (Render blocks it — use Koyeb / Fly / Railway / a VPS instead).
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: true,
      // Fail fast instead of hanging forever if SMTP is blocked/unreachable.
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })

    let info = await transporter.sendMail({
      from: `"Kovo" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log("MAIL SEND ERROR:", error.message)
    throw error
  }
}

module.exports = mailSender
