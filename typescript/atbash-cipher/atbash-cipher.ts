import { kStringMaxLength } from "buffer"

// create our array of alphabet values and cypher values. We
// then append an array of numbers 0-9 to handle inputs
// containing numbers
let alphabet: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase())
  .concat([...Array(10).keys()].map((num) => String(num)))

let cypher: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase()).reverse()
  .concat([...Array(10).keys()].map((num) => String(num)))

// take our input string, remove everything except characters
// and numbers, return its matching value in the cypher,
// and add a space at the appropriate place in the output
// string. trimEnd() to handle cases where regex adds
// a space at the end
export function encode(plainText: string): string {
  let cleanedText: string = Array.from(plainText.toLowerCase())
    .map((element) => {
      if (element.match(/^[a-z0-9]+$/i)) {
        return cypher[alphabet.indexOf(element)]
      }
    })
    .join('').replace(/(.{5})/g, "$1 ")
  return cleanedText.trimEnd()
}

export function decode(cipherText: string): string {
  let decoded: string = Array.from(cipherText)
    .map((element) => {
      if (element.match(/^[a-z0-9]+$/i)) {
        return alphabet[cypher.indexOf(element)]
      }
    }).join('')
  return decoded
}
