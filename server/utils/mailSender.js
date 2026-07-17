const nodemailer = require("nodemailer")

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
      // Fail fast instead of hanging indefinitely if the SMTP connection
      // can't be established (e.g. the host restricts outbound SMTP) —
      // without these, a stuck connection hangs the whole request.
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
