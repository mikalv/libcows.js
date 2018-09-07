'use strict'
const fs = require('fs')
const path = require('path')
const libfancy = require('./libfancy')

const cows = () => fs.readFileSync(path.join(__dirname, 'cows.txt'), 'utf8').replace(/\n$/, '').split('\n\n\n')

module.exports = cows
module.exports.randomCow = () => cows()[Math.floor(Math.random()*cows().length)]
module.exports.printRainbowedRandomCow = () => {
  console.log(libfancy.rainbow.multiline(cows()[Math.floor(Math.random()*cows().length)]))
}
