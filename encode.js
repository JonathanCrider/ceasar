import { encodeMap } from './map.js'
import { text } from './_text.js'

const offset = parseInt(process.argv[2])
const string = process.argv[3] ? process.argv[3] : text
console.log('offset:', offset, '\nmessage:', string)

const encode = (string, offset = 0) => {
  return 'code: ' + string.toLowerCase().split('').reduce((acc, char) => {
    if (!char || char === ' ') return acc
    return acc += ((encodeMap[char] - offset) % 26) + ' '
  }, '')
}

console.log(encode(string, offset))
