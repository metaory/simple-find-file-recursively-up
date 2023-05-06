const { existsSync } = require('fs')
const { resolve } = require('path')

function findFile(filename, dir = process.cwd()) {
  const path = resolve(dir, `./${filename}`)

  const upDir = resolve(dir, '..')

  if (existsSync(path)) {
    return path
  } 
  if (upDir === '/') {

  return findFile(filename, upDir)
}

module.exports = findFile
