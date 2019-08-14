const getCookies = res => {
  const cookies = res.headers['set-cookie'][0]
  return cookies
}

const parseCookie = cookies => {
  const tail = cookies.indexOf(';')
  const sessionId = cookies.slice(0, tail)
  return sessionId
}

const getSessionId = resp => {
  const cookie = getCookies(resp)
  const sessionId = parseCookie(cookie)
  return sessionId
}

module.exports = {
  getSessionId
}
