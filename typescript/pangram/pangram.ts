import { appendFile } from "fs";

export function isPangram(testPangram: string): boolean {

  // define our alphabet array for comparing the letters
  // in a test string
  let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let usedLetters: Array<string> = [];

  // remove whitespace, and push new letters to usedLetters.
  // we don't need pangramCheck later, but this artifact
  // may be useful to have in this program.
  let pangramCheck: Array<string> = testPangram.split('').filter(character => {
    if (alphabet.includes(character.toLowerCase())) {
      if (!usedLetters.includes(character.toLowerCase())) {
        usedLetters.push(character.toLowerCase());
      }
      return character.toLowerCase();
    }
  })

  // sorts our usedLetters array a thru z
  usedLetters.sort();

  // use a function to check that alphabet matches the
  // letters used in the test string. return the result.
  return checkForEqualValues(alphabet, usedLetters);

  // accepts: two arrays
  // returns: boolean valye of whether or not they match
  function checkForEqualValues(first: Array<string>, second: Array<string>): boolean {
    for (let i = 0; i < first.length; i++) {
      if (first[i] != second[i]) return false
    }
    return true;
  }
}
