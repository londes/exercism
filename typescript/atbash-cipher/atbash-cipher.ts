import { kStringMaxLength } from "buffer"

let alphabet: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase())

let cypher: Array<string> = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x).toLowerCase()).reverse()

export function encode(plainText: string): string {
  console.log('plainText is: ' + plainText)
  let cleanedText: string = Array.from(plainText.toLowerCase())
    .map((letter) => cypher[alphabet.indexOf(letter)])
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
