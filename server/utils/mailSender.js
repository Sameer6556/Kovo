const https = require("https")

// Sends email through Promailer's HTTP API over HTTPS (port 443), so it works
// on Render (which blocks SMTP). Promailer relays through the Gmail SMTP
// connection configured in its dashboard — so Gmail is the real sender and
// deliverability stays good.
//
// Required env: PROMAILER_API_KEY
// Optional env: PROMAILER_SMTP_ID (route via a specific connection),
//               MAIL_USER (the "from" address; defaults to the connection's).
//
// Public signature unchanged: mailSender(email, title, body).
const mailSender = (email, title, body) => {
  const payload = JSON.stringify({
    to: email,
    subject: title,
    html: body,
    from: process.env.MAIL_USER, // omitted if undefined → uses connection default
    smtpId: process.env.PROMAILER_SMTP_ID, // omitted if undefined → default connection
  })

  const options = {
    hostname: "mailserver.automationlounge.com",
    path: "/api/v1/messages/send",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PROMAILER_API_KEY}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
    timeout: 15000,
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ""
      res.on("data", (chunk) => (data += chunk))
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log("Email sent via Promailer:", data)
          resolve(JSON.parse(data || "{}"))
        } else {
          console.log("MAIL SEND ERROR:", res.statusCode, data)
          reject(new Error(`Promailer error ${res.statusCode}: ${data}`))
        }
      })
    })
    req.on("error", (err) => {
      console.log("MAIL SEND ERROR:", err.message)
      reject(err)
    })
    req.on("timeout", () => {
      req.destroy(new Error("Promailer request timed out"))
    })
    req.write(payload)
    req.end()
  })
}

module.exports = mailSender
