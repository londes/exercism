
// function that tests whether a number is Perfect, Abundant, or Deficient according
// to the classifications of Niomachus and his classification scheme for perfect
// integers.

// our function to classify the numbers
// accepts: an integer
// returns: a classification

  // define our array of factors, including 1 as it is a factor of every number.
  // we have to define it in the global namespace outside of the function so that
  // its values are not overwritten every time the function is called.
  //
  // note: we could just define an empty array here, then push 1 before we return
  // at the end of our algorithm
  let factors = [1];
  
  // since this is a recursive algorithm, created a variable to track how many times
  // we've been thru the function for debugging purposes.
  let iterations = 0;

export const classify = (number) => {
  iterations++;
  console.log('we called classify() on ' + number + ' and this is iteration ' + iterations);

  // check to ensure the number is positive and non-zero
  if (number <= 0) {
    // reset iterations to 0 since we're done here with this run-thru
    iterations = 0;
    throw Error('Classification is only possible for natural numbers.');
  } 
  // otherwise, perform the check
  else {

    // if the number is divisible by two, store the quotient and call classify again
    // on that number.
    if (number % 2 == 0) {

      // if the number is 2, we've reached the end of our recursive loop. we don't
      // want to break the function either and look to return the completed array at this point
      if (number == 2) {
        factors.push[number];

      // if the number is divisible by two, and is not two, store the number and run this
      // algorithm again
      } else {
        factors.push(number/2);
        classify(number/2);
      }
    }

    // if the number is divisible by three, store the quotient and call classify again
    // on that number.
    if (number % 3 == 0) {

      // if the number is 3, we've reached the end of our recursive loop. we don't
      // want to break the function either and look to return the completed array at this point
      if (number == 3) {
        factors.push[number];

      // if the number is divisible by 3, and is not three, store the number and run this
      // algorithm again
      } else {
        factors.push(number/3);
        classify(number/3);
      }

    }
  // output for debugging, checking our array
  console.log('we\'ve reached the end of our algorithm and the factors are ' + factors);

  // reset iterations to 0 since we're done here with this run-thru
  iterations = 0;

  // return our array
  return factors;
  }
};
