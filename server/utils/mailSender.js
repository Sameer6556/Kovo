const https = require("https")

// Sends email through Brevo's transactional API over HTTPS (port 443), because
// Render blocks outbound SMTP on every port (25 / 465 / 587 — all verified to
// time out). For reliable inbox delivery, MAIL_USER must be on a domain you own
// and that domain must be authenticated (SPF/DKIM) in Brevo.
//
// Public signature unchanged: mailSender(email, title, body).
const mailSender = (email, title, body) => {
  const payload = JSON.stringify({
    sender: { name: "Kovo", email: process.env.MAIL_USER },
    to: [{ email }],
    subject: title,
    htmlContent: body,
  })

  const options = {
    hostname: "api.brevo.com",
    path: "/v3/smtp/email",
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
      "content-length": Buffer.byteLength(payload),
    },
    timeout: 15000,
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ""
      res.on("data", (chunk) => (data += chunk))
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log("Email sent via Brevo:", data)
          resolve(JSON.parse(data || "{}"))
        } else {
          console.log("MAIL SEND ERROR:", res.statusCode, data)
          reject(new Error(`Brevo API error ${res.statusCode}: ${data}`))
        }
      })
    })
    req.on("error", (err) => {
      console.log("MAIL SEND ERROR:", err.message)
      reject(err)
    })
    req.on("timeout", () => {
      req.destroy(new Error("Brevo API request timed out"))
    })
    req.write(payload)
    req.end()
  })
}

module.exports = mailSender
