const axios = require('axios')
const { admin_idname, passwd, remember } = require('./config')

const login = async () => {
  try {
    return await axios.get('https://admin.printsquare.net/include/loginaction.php', {
      params: {
        admin_idname: admin_idname,
        passwd: passwd,
        remember: remember
      }
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  login
}
