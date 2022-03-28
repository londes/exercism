import { start } from "repl";

export function toRna(startingDnaLetter: string): string {

  // define our object containing transcriptions
  const dnaToRna: any = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  // error handling: we split startingDnaLetter into an
  // array so we can iterate over each element in the string.
  // if the letter we're checking in startingDnaLetter is in
  // the dnaToRna object, do nothing and proceed.
  // if it's not in the object, throw an error.
  startingDnaLetter.split('').forEach((letter) => {
    if (dnaToRna[letter]) { }
    else {
      throw 'Invalid input DNA.'
    }
  })

  // first we convert the startingDnaLetter string to an array
  // using split(). Then, we create a new array of the mapped values. 
  // Then, finally we use join() to combine it back into a string.
  return startingDnaLetter.split('').map((value) => {
    return dnaToRna[value];
  }).join('')
}
