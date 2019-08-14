const schedule = require('node-schedule')

let rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = [new schedule.Range(9, 15)]
rule.minute = [0, 10, 20, 30, 40, 50]

module.exports = rule
