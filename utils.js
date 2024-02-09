export const decodeMap = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z' }

export const createEncodeMap = decodeMap => {
  const encodeMap = {}
  for (let key in decodeMap) {
    const k = decodeMap[key]
    encodeMap[k] = parseInt(key)
  }
  return encodeMap
}

export const encodeMap = createEncodeMap(decodeMap)

export const mod26 = (max, value) => {
  const min = 1
  const num = typeof value === 'number' ? value : parseInt(value)
  let result = num
  if (num < min) result = value + max
  else if (num > max) result = value - max

  const outOfBounds = result > max || result < min
  if (outOfBounds) return mod26(max, result)
  else return result
}
