const fs = require('fs'),
      html = fs.readFileSync(`${__dirname}/index.html`)

module.exports = function(message) {
  return {
    body: html
  }
}
