//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  // if word is empty (no value) exit and return 0
  if (word == ''){
    return 0;
  
  // otherwise, run this remaining code in score() function
  } else {
    console.log('the word input is: ' + word);

    // dictionary of letters and their score value
    let letters = {
      a : 1,
      e : 1,
      i : 1,
      o : 1,
      u : 1,
      l : 1,
      n : 1,
      r : 1,
      s : 1,
      t : 1,
      d : 2,
      g : 2,
      b : 3,
      c : 3,
      m : 3,
      p : 3,
      f : 4,
      h : 4,
      v : 4,
      w : 4,
      y : 4,
      k : 5,
      j : 8,
      x : 8,
      q : 10,
      z : 10
    }
  
    // split letters into an array after converting all letters to lower case
    let wordLetters = word.toLowerCase().split('');
    console.log('letters array: ' + wordLetters);
  
    // creates a new array of scores using convertToScores()
    let scores = convertToScores(wordLetters);
    console.log('letters score array: ' + scores);
    
    // adds all of the values in our scores array to produce a sum, or word score
    let wordScore = scores.reduce((value, nextValue) => value + nextValue);
    console.log('total score: ' + wordScore);
  
    // function that accepts an array of letters and builds a new array of
    // values corresponding to that letter's score
    function convertToScores(arrayOfLetters) {
      let letterScores = [];
      arrayOfLetters.forEach(value => letterScores.push(letters[value]));
      return letterScores;
    }

    // returns our word score
    return wordScore;
  }
  
};
