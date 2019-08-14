const { login } = require('./login')
const { getSessionId } = require('./cookies')

const start = async () => {
  const res = await login()
  const sessionId = getSessionId(res)
  console.log(sessionId)
}

start()
