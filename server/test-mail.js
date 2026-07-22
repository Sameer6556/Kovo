// Quick check that your MAIL_ env variables actually send email.
// Usage:  node test-mail.js "you@example.com"
require("dotenv").config()
const mailSender = require("./utils/mailSender")

const to = process.argv[2]

if (!to) {
  console.log('Usage: node test-mail.js "you@example.com"')
  process.exit(1)
}

if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.log(
    "Missing MAIL_HOST / MAIL_USER / MAIL_PASS in server/.env — set them first."
  )
  process.exit(1)
}

;(async () => {
  console.log(`Sending a test email from ${process.env.MAIL_USER} to ${to} ...`)
  try {
    const result = await mailSender(
      to,
      "Kovo — test email",
      `<div style="font-family: Arial, sans-serif; color:#0a0a0b;">
         <img src="https://res.cloudinary.com/dmy5taog4/image/upload/Profile/kovo-logo.png" alt="Kovo" width="120" style="display:block;border:0;" />
         <h2 style="margin:16px 0 8px;">It works ✅</h2>
         <p style="color:#3f3f46;">Your Kovo email sending is configured correctly.</p>
       </div>`
    )
    // Success = mailSender resolved (it throws on failure).
    console.log("SUCCESS ✅:", result?.response || result?.message || "email sent")
    process.exit(0)
  } catch (err) {
    console.log("FAILED ❌:", err.message)
    process.exit(1)
  }
})()
