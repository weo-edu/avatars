/**
 * Modules
 */
var fs = require('fs')
var path = require('path')

/**
 * Vars
 */
var dir = path.join(__dirname, 'files')
var files = fs.readdirSync(dir)

/**
 * Generate an object of name <-> filepath
 * pairs for all our avatars
 */
var avatars = files.reduce(function(memo, file) {
  var name = file.split('.')[0]
  memo[name] = path.join(dir, file)
  return memo
}, {})

/**
 * Exports
 */
module.exports = avatars