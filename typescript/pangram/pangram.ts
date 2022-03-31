import { appendFile } from "fs";

export function isPangram(testPangram: string): boolean {
  let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // remove whitespace
  let pangramCheck: Array<string> = testPangram.split('').filter(character => {
    if (alphabet.includes(character))
      return character;
  })

  pangramCheck.forEach(character => {
    if (!alphabet.includes(character)) {
      return false;
    }
  })
  return true;
}
