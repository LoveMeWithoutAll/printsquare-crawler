const { host, port, auth, from, to, subject, html } = require('./config')
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: host,
  port: port,
  auth
})

const mailOptions = {
  from,
  to,
  subject,
  html
}

const sendMail = () => {
  transport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.error(err)
    } else {
      console.log(res)
    }
    transport.close()
  })
}

module.exports = sendMail