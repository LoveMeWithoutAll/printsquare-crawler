const { login } = require('./login')
const { getSessionId } = require('./cookies')
const getAdminPage = require('./crawler')
const isNewOrder = require('./parser')

const crawl = async () => {
  const res = await login()
  const sessionId = getSessionId(res)
  const adminPage = await getAdminPage(sessionId)
  const isNew = isNewOrder(adminPage)
  return isNew
}

module.exports = crawl
