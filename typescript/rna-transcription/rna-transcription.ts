export function toRna(startingDnaLetters: string): string {

  // define our object containing transcriptions
  const dnaToRna: any = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  // error handling. If the letter we're checking
  // is not in dnaToRna, throw an error
  startingDnaLetters.split('').forEach((letter) => {
    if (dnaToRna[letter]) { }
    else {
      throw 'Invalid input DNA.'
    }
  })

  // our return statement splits startingDnaLetters
  // into an array then creates a new array with the
  // rna values. Then we use join to combine it into a string
  return startingDnaLetters.split('').map((value) => {
    return dnaToRna[value];
  }).join('')
}
