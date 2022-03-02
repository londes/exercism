
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
  // in our factors algorithm.
  let startingNumber = number;

  // build our array of numbers that are factors of the number passed to classify()
  let numberFactors = getFactors(number, startingNumber);
  console.log('we called getFactors and the factors of ' + number + ' are ' + numberFactors);
  
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


  // getFactors is a recursive algorithm that takes a number and returns an array of all
  // of its factors.
  // accepts: a number, and our number again to store it as a starting value
  // returns: an array of factors
  function getFactors(number, startingNumber) {
    iterations++;
    console.log('our starting number is: ' + startingNumber);
    console.log('we called getFactors() on ' + number + ' and this is iteration ' + iterations);
    console.log('is ' + number + ' prime? ' + isPrime(number));

    // if the number is divisible by two, store the quotient and call classify again
    // on that number.
    if (number % 2 == 0) {
      console.log(number + ' is divisible by 2 and we\'re in the 2 loop');
      // if the number is 2, we've reached the end of our recursive loop. we want
      // to return the completed array at this point.
      if (number == 2) {
        factors.push[number];

      // if the number is divisible by two, store the number and run this
      // algorithm again
      } else {
        factors.push(number/2);
        getFactors(number/2, startingNumber);
      }
    }

    // if the number is divisible by three, store the quotient and call classify again
    // on that number.
    if (number % 3 == 0) {
      console.log(number + ' is divisible by 3 and we\'re in the 3 loop');
      // if the number is 3, we've reached the end of our recursive loop. we want
      // to return the completed array at this point.
      if (number == 3) {
        factors.push[number];

      // if the number is divisible by 3, store the number and run this
      // algorithm again
      } else {
        factors.push(number/3);
        getFactors(number/3, startingNumber);
      }

    }

    // these two cases cover when the last number we arrive at is prime, and not divisible
    // by two or three. This way, we can still get 2 and/or 3 as a factor by checking
    // against the original number
    if (isPrime(number) && (startingNumber % 2 == 0)) {
      factors.push(2);
    }

    if (isPrime(number) && (startingNumber % 3 == 0)) {
      factors.push(3);
    }

  // reset iterations to 0 since we're done here with this run-thru
  iterations = 0;

  // return our array
  return factors;
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

};
