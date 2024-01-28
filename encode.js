import { encodeMap, mod } from './map.js'
import { text } from './_text.js'

const offset = parseInt(process.argv[2]) || 0
const string = process.argv[3] ? process.argv[3] : text
console.log('offset:', offset, '\nmessage:', string)

const encode = (string, offset) => {
  return 'code: ' +
  string
    .toLowerCase()
    .split('')
    .reduce((acc, char) => {
      if (!char || char === ' ') return acc
      return acc += mod(26, (encodeMap[char] - offset)) + ' '
    }, '')
}

console.log(encode(string, offset))
