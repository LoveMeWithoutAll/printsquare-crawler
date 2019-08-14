const auth = {
  user: "",
  pass: ""
}

const host = 'smtp.naver.com'
const port = 465
const from = ''
const to = ''
const subject = 'new order on PRINT SQUARE'
const html = `<html><body>PRINT SQUARE에 new order가 왔어요!</body></html>`

module.exports = {
  host,
  port,
  auth,
  from,
  to,
  subject,
  html
}
