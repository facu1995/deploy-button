
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./fp-button-infosis.cjs.production.min.js')
} else {
  module.exports = require('./fp-button-infosis.cjs.development.js')
}
