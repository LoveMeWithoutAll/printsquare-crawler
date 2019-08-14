const crawl = require('./crawler')
const sendMail = require('./mail')

const isNew = async () => {
  const isNew = await crawl()
  if (isNew) sendMail()
}
