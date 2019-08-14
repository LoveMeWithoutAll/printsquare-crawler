const axios = require('axios')

const sendRequestToAdminPage = sessionId => {
  try {
    return axios.get('https://admin.printsquare.net/main/main.php', {
      headers: {
        Cookie: sessionId
      }
    })
  } catch (error) {
    console.error(eror)
  }
}

const getAdminPage = async (sessionId) => {
  const res = await sendRequestToAdminPage(sessionId)
  return res.data
}

module.exports = getAdminPage
