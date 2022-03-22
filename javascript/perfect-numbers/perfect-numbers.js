
// function that tests whether a number is Perfect, Abundant, or Deficient according
// to the classifications of Niomachus and his classification scheme for perfect
// integers.

import { start } from "repl";

// our function to classify the numbers
// accepts: an integer
// returns: a classification

export const classify = (number) => {

  // since this is a recursive algorithm, created a variable to track how many   times
  // we've been thru the function for debugging purposes.
  let iterations = 0;

  // check to ensure the number is positive and non-zero
  if (number <= 0) {
    // reset iterations to 0 since we're done here with this run-thru
    throw Error('Classification is only possible for natural numbers.');

  // we could write more complex handling here for when we get a number
  // where the only factor is itself, and therefore that number is not included
  // as a factor, but the only number that's possible for is 1, so we will return 
  // deficient because its only factor is itself so 0>1
  } else if (number == 1 || number == 2 || (isPrime(number) && iterations == 0)) {
    return 'deficient';
  }

  // define our array of factors, including 1 as it is a factor of every number.
  // we have to define it in the main function outside of getFactors so that
  // its values are not overwritten every time the function is called.
  //
  // note: we could just define an empty array here, then add 1 before we return
  // at the end of our algorithm
  let factors = [1];

  // we have to store the starting number passed into classify to deal with prime numbers
  // in our factors algorithm. This is just for debugging purposes and can be removed if
  // desired.
  let startingNumber = number;

  // the sqrt of the original number is the highest common factor of that number.
  // so, we want to test if all of the ints between 2 and the sqrt factor into
  // that number to account for all possible factors.
  let possibleFactors = getLowestPossibleFactors(number);
  console.log('the possible lowest common factors of ' + number + ' are ' + possibleFactors);

  // for each possible factor, check if it is a factor of our starting number. If so, recursively
  // check for all numbers that also divide into our starting number that may be factors
  // of that possible factor.
  possibleFactors.forEach(possibleFactor => {
    getFactors(number, possibleFactor, startingNumber);
  });
  //let numberFactors = getFactors(number, startingNumber);
  console.log('we called getFactors and the factors of ' + number + ' are ' + factors);
  
  // get the total of all of the factors
  let factorsTotal = factors.reduce((first, next) => first + next);
  console.log('we summed all of the factors and the total is: ' + factorsTotal);
  
  // check to see if our factors total is equal to, larger, or smaller than
  // our starting number
  if (factorsTotal == number) {
    return 'perfect';
  } else if (factorsTotal > number) {
    return 'abundant';
  } else return 'deficient';

  // implement recursive check for each integer between 2 and sqrt of number
  // pass array in and potentially use contains() to check for duplicates

  // getFactors is a recursive algorithm that takes a number and returns an array of all
  // of its factors.
  // accepts: a number, and our number again to store it as a starting value
  // returns: an array of factors
  function getFactors(number, possibleFactor, startingNumber) {
    iterations++;
    console.log('we called getFactors() on ' + number + ' and this is iteration ' + iterations);
    console.log('our starting number is: ' + startingNumber + ' and the current factor is ' + possibleFactor);
    console.log('is ' + number + ' prime? ' + isPrime(number));

    if (number % possibleFactor == 0) {
      // we've confirmed the possible factor divides into our number, we have to push
      // it into our array now because it may later divide into a prime number recursively
      if (!factors.includes(possibleFactor)){factors.push(possibleFactor)};
      // just a debugger statement
      console.log(number + ' is divisible by '+ possibleFactor + ' and we\'re in the ' + possibleFactor + ' loop');
      // if the number is 2, we've reached the end of our recursive loop. we want
      // to return the completed array at this popossibleFactor.
      if (number == possibleFactor && !factors.includes(number)) {
        factors.push(possibleFactor);    // if the number is divisible by a possible factor, store the number and run this
      // algorithm again
      } 
      // if our possible factor is larger than the number we are evaluating, do nothing
      if (possibleFactor > number) {  
      } else if (!factors.includes(number)) {
        factors.push(number/possibleFactor);
        console.log('we just divided ' + number + ' by ' + possibleFactor + ' and pushed ' + number/possibleFactor);
        getFactors(number/possibleFactor, possibleFactor, startingNumber);
      }
    }
    
    // these two cases cover when the last number we arrive at is prime, and not divisible
    // by two or three. This way, we can still get 2 and/or 3 as a factor by checking
    // against the original number
    if (isPrime(number) && !factors.includes(number)) {
      console.log('we\'re in the prime push spot and we\'re about to push: ' + number);
      factors.push(number);
    }

    // return our array
    return factors;
  }
}


  // function that constructs an array of all possible lowest factors of a number.
  // The highest common factor of any number must be its square root. Therefore,
  // we should check each number leading up to its square root in our check.
  function getLowestPossibleFactors (number) {
      let lowestPossibleFactors = [];
      for(let i=2, s = Math.sqrt(number); i <= s; i++){
        lowestPossibleFactors.push(i);
      }
      return lowestPossibleFactors;
  }

// our algorithm fails if after dividing down into a number's factors, it ends on a prime number.
// for example, 28 is divisible by 2, but 28/2 = 14, 14/2 = 7, and 7 is prime so 2 is never pushed
// to our factors array. We need to push 2 or 3 if the initial number is divisible by 2 or 3 but
// we end on a prime number.
function isPrime(number) {
  for(let i=2, s = Math.sqrt(number); i <= s; i++){
    if(number % i === 0) return false;
    return number >= 2;
  }
}

classify();