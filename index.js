const crawl = require('./crawler')

const isNew = async () => {
  const isNew = await crawl()
  return isNew
}

isNew()
