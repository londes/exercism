
// function that tests whether a number is Perfect, Abundant, or Deficient according
// to the classifications of Niomachus and his classification scheme for perfect
// integers.

import { start } from "repl";

// our function to classify the numbers
// accepts: an integer
// returns: a classification

export const classify = (number) => {

  // check to ensure the number is positive and non-zero
  if (number <= 0) {
    // reset iterations to 0 since we're done here with this run-thru
    throw Error('Classification is only possible for natural numbers.');
  } 

  // define our array of factors, including 1 as it is a factor of every number.
  // we have to define it in the main function outside of getFactors so that
  // its values are not overwritten every time the function is called.
  //
  // note: we could just define an empty array here, then add 1 before we return
  // at the end of our algorithm
  let factors = [1];
  
  // since this is a recursive algorithm, created a variable to track how many   times
  // we've been thru the function for debugging purposes.
  let iterations = 0;

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
  let factorsTotal = numberFactors.reduce((first, next) => first + next);
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
    console.log('our starting number is: ' + startingNumber);
    console.log('we called getFactors() on ' + number + ' and this is iteration ' + iterations);
    console.log('is ' + number + ' prime? ' + isPrime(number));

    if (number % possibleFactor == 0) {
      console.log(number + ' is divisible by '+ possibleFactor + ' and we\'re in the ' + possibleFactor + ' loop');
      // if the number is 2, we've reached the end of our recursive loop. we want
      // to return the completed array at this popossibleFactor.
      if (number == possibleFactor) {
        factors.push(possibleFactor);    // if the number is divisible by a possible factor, store the number and run this
      // algorithm again
      } 
      // if our possible factor is larger than the number we are evaluating, do nothing
      if (possibleFactor > number) {  
      } else {
        factors.push(number/possibleFactor);
        console.log('we just pushed ' + number/possibleFactor);
        getFactors(number/possibleFactor, possibleFactor, startingNumber);
      }
    }
    
    // these two cases cover when the last number we arrive at is prime, and not divisible
    // by two or three. This way, we can still get 2 and/or 3 as a factor by checking
    // against the original number
    if (isPrime(number) && (startingNumber % number == 0)) {
      factors.push(number);
    }

    // reset iterations to 0 since we're done here with this run-thru
    iterations = 0;

    // return our array
    return factors;
  }

    // // if the number is divisible by two, store the quotient and call classify again
    // // on that number.
    // if (number % 2 == 0) {
    //   console.log(number + ' is divisible by 2 and we\'re in the 2 loop');
    //   // if the number is 2, we've reached the end of our recursive loop. we want
    //   // to return the completed array at this point.
    //   if (number == 2) {
    //     factors.push[number];

    //   // if the number is divisible by two, store the number and run this
    //   // algorithm again
    //   } else {
    //     factors.push(number/2);
    //     getFactors(number/2, startingNumber);
    //   }
    // }

    // // if the number is divisible by three, store the quotient and call classify again
    // // on that number.
    // if (number % 3 == 0) {
    //   console.log(number + ' is divisible by 3 and we\'re in the 3 loop');
    //   // if the number is 3, we've reached the end of our recursive loop. we want
    //   // to return the completed array at this point.
    //   if (number == 3) {
    //     factors.push[number];

    //   // if the number is divisible by 3, store the number and run this
    //   // algorithm again
    //   } else {
    //     factors.push(number/3);
    //     getFactors(number/3, startingNumber);
    //   }

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

