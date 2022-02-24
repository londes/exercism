/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// uses buildCurrentGrains() to construct an array of 
// grain values to represent the chess board, 
// then returns the value at the specified
// location in the array
export const square = (location) => {
  if (location > 0 && location < 65) {
    console.log('location input is: ' + location);
    let squareValues = buildCurrentGrains();
    return squareValues[location-1];
  } else {
    throw new Error('square must be between 1 and 64');
  }
};

// uses buildCurrentGrains() to construct an array of
// grain values then sums the values
export const total = () => {
  let squareValues = buildCurrentGrains();
  let total = squareValues.reduce((a,b) => a+b);
  return total;
};

// constructs an array of the values of doubling grains
// in a 64 cell arrangemet to emulate the chess board
// of the grains problem. 
// void function returns the completed array.
function buildCurrentGrains() {
  let squareValues = [];
  let currentGrains = BigInt(1);
  console.log('starting currentGrains: ' + currentGrains);

  for (let i=0; i<64; i++) {
    console.log('in the for loop and currentGrains is: ' + currentGrains);  
    squareValues.push(currentGrains);
    currentGrains *= BigInt(2);
  }

  console.log('squareValues array: ' + squareValues);

  return squareValues;
}

// export class ValueError extends Error {
//   constructor() {
//     super();
//     value: Error
//   }
// }