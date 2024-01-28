import { decodeMap } from './map.js'
import { code } from './_text.js'

const offset = parseInt(process.argv[2])
const numString = process.argv[3] ? process.argv[3] : code
console.log('offset:', offset, '\ncode:', numString)

const decode = (string, offset = 0) => {
  return 'message: ' + string.toLowerCase().split(' ').reduce((acc, num) => {
    const key = (parseInt(num) + offset) % 26
    if (!num) return acc
    return acc += decodeMap[key]
   }, '')
}

console.log(decode(numString, offset))
