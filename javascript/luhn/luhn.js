//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (numberString) => {
  
  // replace whitespace
  numberString.replace(' ', '');
  console.log('number string is: ' + numberString);
  
  //check length
  if (numberString.length <= 1){
    return false;
  }

  //connvert to ints, push to a new array
  let numberArray = numberString.split('');
  let trimmedNumberArray = [];
  numberArray.forEach(value => {
    value = parseInt(value);
    if (!isNaN(value)) {
      console.log('in the value check for NaN and the value is: ' + value);
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

  // sum all of the values of the new trimmedNumberArray
  let numberArrayTotal = trimmedNumberArray.reduce(
    (first, next) => first + next
  );
  console.log('number array total: ' + numberArrayTotal);

  let isLuhn = ((numberArrayTotal % 10) == 0);
  console.log('to luhn or not to luhn: ' + isLuhn);

  //return check value
  return isLuhn;
};
