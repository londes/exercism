export function hey(message: string): string {

  let messageArray: Array<string> = message.replaceAll(/\s/g, '').split('');

  let lowerCaseLetters: number = 0;
  let upperCaseLetters: number = 0;

  messageArray.forEach(letter => {
    if (letter == letter.toLowerCase())
      lowerCaseLetters++;
    else if (letter == letter.toUpperCase())
      upperCaseLetters++;
  })

  let yellCheck: boolean = upperCaseLetters > lowerCaseLetters;



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
