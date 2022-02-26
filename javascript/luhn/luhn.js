//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (numberString) => {
  
  // replace whitespace
  numberString.replace(/ /g, '');
  console.log('number string is: ' + numberString);
  
  //check length
  if (numberString.length <= 1){
    return false;
  }

  //connvert to ints, push to array
  let numberArray = numberString.split('');
  numberArray.forEach(value => parseInt(value));
  console.log('number array is: ' + numberArray);

  //perform check

  //return
};
