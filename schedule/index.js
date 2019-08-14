const schedule = require('node-schedule')
const rule = require('./config')

const scheduleJob = fn => {
  schedule.scheduleJob(rule, fn)
}

module.exports = scheduleJob
