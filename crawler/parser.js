const cheerio = require('cheerio')

const findTodayOrderTable = html => {
  const $ = cheerio.load(html)
  const $todayOrderTable = $('#wrapper > div.content-page > div > div > div:nth-child(2) > div:nth-child(1) > div > div.table-responsive > table > tbody')
  const result = $todayOrderTable.html().trim()
  return result
}

const isNewOrder = html => {
  const orderTable = findTodayOrderTable(html)
  return orderTable.includes('No data') ? true : false
}

module.exports = isNewOrder
