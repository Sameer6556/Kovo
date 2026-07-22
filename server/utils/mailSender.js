const nodemailer = require("nodemailer")

// Gmail SMTP — the exact setup that delivered reliably before. Works on any
// host that permits outbound SMTP (localhost, Fly.io, Railway, a VPS…).
// Does NOT work on Render, which blocks SMTP ports.
const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
      // Fail fast rather than hang if SMTP is ever unreachable.
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
