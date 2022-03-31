import { appendFile } from "fs";

export function isPangram(testPangram: string): boolean {
  let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let usedLetters: Array<string> = [];

  // remove whitespace
  let pangramCheck: Array<string> = testPangram.split('').filter(character => {
    if (alphabet.includes(character)) {
      if (!usedLetters.includes(character)) {
        usedLetters.push(character);
      }
      return character;
    }
  })

  usedLetters.sort();

  pangramCheck.forEach(character => {
    if (!alphabet.includes(character) || (alphabet != usedLetters)) {
      return false;
    }
  })
  return true;
}
