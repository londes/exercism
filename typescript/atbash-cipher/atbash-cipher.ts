import { kStringMaxLength } from "buffer"

// create a string of numbers 0-9 to append to our alphabet
// and cypher to handle numbers, and create alphabet and cypher
let numStringArray: Array<string> = [...Array(10).keys()].map((num) => String(num))

let alphabet: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase()).concat(numStringArray)

let cypher: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase()).reverse().concat(numStringArray)


export function encode(plainText: string): string {
  console.log('plainText is: ' + plainText)
  let cleanedText: string = Array.from(plainText.toLowerCase())
    .map((element) => {
      if (element.match(/^[a-z0-9]+$/i)) {
        return cypher[alphabet.indexOf(element)]
      }
    })
    .join('')
  // .map((letter) => {
  //   if (letter.match(/[a-z]/i))
  //     return letter
  // })
  console.log('cleaned Text: ' + cleanedText)

  return cleanedText
}

export function decode(cipherText: unknown): unknown {
  throw new Error('Remove this statement and implement this function')
}
