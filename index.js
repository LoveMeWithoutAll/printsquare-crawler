const crawl = require('./crawler')
const sendMail = require('./mail')
const scheduleJob = require('./schedule')

const isNew = async () => {
  const isNew = await crawl()
  if (isNew) sendMail()
}

scheduleJob(isNew)
