import { decodeMap, mod26 } from './utils.js'
import { code } from './_text.js'

const offset = parseInt(process.argv[2]) || 0
const numString = process.argv[3] ? process.argv[3] : code
console.log('offset:', offset, '\ncode:', numString)

const decode = (string, offset) => {
  return 'message: ' +
    string
      .toLowerCase()
      .split(' ')
      .reduce((acc, num) => {
        const key = mod26(26, (parseInt(num) + offset))
        if (!num) return acc
        return acc += decodeMap[key]
      }, '')
}

console.log(decode(numString, offset))
