/**
 * Modules
 */
var fs = require('fs')
var path = require('path')
var files = fs.readdirSync('./files')

/**
 * Generate an object of name <-> filepath
 * pairs for all our avatars
 */
var avatars = files.reduce(function(memo, file) {
  var name = file.split('.')[0]
  memo[name] = path.join(process.cwd(), 'files', file)
  return memo
}, {})

/**
 * Exports
 */
module.exports = avatars