import { appendFile } from "fs";

export function isPangram(testPangram: string): boolean {
  let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let usedLetters: Array<string> = [];

  // remove whitespace
  let pangramCheck: Array<string> = testPangram.split('').filter(character => {
    character.toLowerCase();
    if (alphabet.includes(character)) {
      if (!usedLetters.includes(character)) {
        usedLetters.push(character);
      }
      return character;
    }
  })

  usedLetters.sort();

  console.log('original phrase is: ' + testPangram);
  console.log('alphabet is: ' + alphabet)
  console.log('pangramCheck is: ' + pangramCheck);
  console.log('used letters is: ' + usedLetters);
  console.log('does alphabet equal usedletters? ' + (alphabet == usedLetters));



  if (alphabet !== usedLetters) {
    return false;
  }
  return true;
}
