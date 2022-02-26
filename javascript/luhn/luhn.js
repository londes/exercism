//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { exit } from "process";

export const valid = (numberString) => {
  
  // replace whitespace
  numberString = numberString.replace(/\s/g, '');
  console.log('number string is: ' + numberString);
  
  //check length, return false if 1 or less in length
  if (numberString.length <= 1){
    return false;
  }

  //connvert to ints, push to a new array
  let numberArray = numberString.split('');
  console.log('number array is: ' + numberArray);

  // ad-hoc check for symbols, characters, and punctuation, which should fail our test
  // not sure this is an ideal way to do this, namely
  // the idea of creating a new array of test values and
  // using includes() to check for failure.
  // It works but does not feel very performant
  let charChecks = [];
  let charCheck = true;
  numberArray.forEach(value => {
    let checkerValue = true;
    let valueInt = parseInt(value);
    if (value == /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g || isNaN(valueInt)) {
      console.log('char check fail, and the char is: ' + value);
      charChecks.push(false);
    } else {
      console.log('char check pass, and the char is: ' + value);
      charChecks.push(true);
    }
  })

  if (charChecks.includes(false)) {
    console.log('**failed the charCheck**');
    return false;
  }
  if (!charChecks.includes(false)) {
    console.log('**passed the char check**');
  }

  // ok, back to converting to ints and pushing to array
  // note to self: this operation could be performed in the above forEach.
  // simply have to put the push inside the valudation check.
  let trimmedNumberArray = [];
  numberArray.forEach(value => {
    value = parseInt(value);
    if (!isNaN(value)) {
      trimmedNumberArray.push(value);
    }
  });
  console.log('trimmed number array is: ' + trimmedNumberArray);

  //perform check
  // first, double every other value and subtract 9 if greater than 9
  let doublingCheck = 1;
  for (let i=trimmedNumberArray.length; i>0; i--) {
    if (doublingCheck % 2 == 0) {
      trimmedNumberArray[i-1] = trimmedNumberArray[i-1] * 2;
      if (trimmedNumberArray[i-1] > 9) {
        trimmedNumberArray[i-1] = trimmedNumberArray[i-1] - 9;
      }
    }
    doublingCheck++;
  }
  console.log('new array: ' + trimmedNumberArray); 

  // then, sum all of the values of the new trimmedNumberArray
  // to grab our total
  let numberArrayTotal = trimmedNumberArray.reduce(
    (first, next) => first + next
  );
  console.log('number array total: ' + numberArrayTotal);

  // check if resulting sum is a Luhn value
  let isLuhn = ((numberArrayTotal % 10) == 0);
  console.log('to luhn or not to luhn: ' + isLuhn);

  //return check value
  return isLuhn;
};
