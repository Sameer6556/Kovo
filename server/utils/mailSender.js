const https = require("https")

// Sends an email through Brevo's transactional email API over HTTPS (port 443).
// We use the API instead of SMTP because hosting platforms (e.g. Render) block
// outbound SMTP ports, which made every email request hang.
//
// The public function signature is unchanged: mailSender(email, title, body).
const mailSender = (email, title, body) => {
  const payload = JSON.stringify({
    sender: {
      name: "Kovo",
      email: process.env.MAIL_USER, // must be a verified sender in Brevo
    },
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
