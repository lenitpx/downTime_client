'use strict'

const config = require('../config')

const signUp = function (data) {
  console.log('Data in api function is ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  signUp
}