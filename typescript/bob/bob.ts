export function hey(message: string): string {

  // remove white space
  let messageArray: Array<string> = message.replaceAll(/\s/g, '').split('');

  // increment values to see if the question is yellinng
  let lowerCaseLetters: number = 0;
  let upperCaseLetters: number = 0;

  // count the number of upper case and lower case letters
  messageArray.forEach(letter => {
    if (letter == letter.toLowerCase())
      lowerCaseLetters++;
    else if (letter == letter.toUpperCase())
      upperCaseLetters++;
  })

  // if there are more capitals than lower case letters, we can assume
  // the question is a yell
  let yellCheck: boolean = upperCaseLetters > lowerCaseLetters;

  // return the correct response based onn the nature of the question
  if (messageArray.length == 0) {
    return 'Fine. Be that way!'
  } else if (messageArray[messageArray.length - 1] == '?' && !yellCheck) {
    return 'Sure.'
  } else if (messageArray[messageArray.length - 1] == '?' && yellCheck) {
    return 'Calm down, I know what I\'m doing!'
  } else if (yellCheck) {
    return 'Whoa, chill out!'
  }
  return 'Whatever.';
}
