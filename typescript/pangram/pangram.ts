export function isPangram(testPangram: string): boolean {

  // define our alphabet array for comparing the letters
  // in a test string
  let alphabet: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // create comparison array from provided string
  let testPangramChars: Array<string> = testPangram.toLowerCase().split('');

  // return true if every letter in the alphabet appears in
  // the provided string
  return alphabet.every(letter => testPangramChars.includes(letter));
}
