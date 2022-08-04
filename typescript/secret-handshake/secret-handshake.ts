export function commands(input: number): Array<string> {
  let moves: Array<string> = [
    'wink',
    'double blink',
    'close your eyes',
    'jump',
    'reverse'
  ]
  let outputCommands: Array<string> = []

  //// convert number to binary
  let num: number = input

  // if number is divisible by 2, start with a 0.
  // otherwise, start with a 1
  let binary: string = (num % 2).toString()

  // repeat this process above while prepending
  // to our binary string.
  while (num > 1) {
    num = parseInt((num / 2).toString())
    binary = (num % 2) + binary
  }
  console.log('binary check: ' + binary)

  //// covnert binary number to commands
  binary.split('').map(value => { parseInt(value) }).reverse().forEach(num => {
    if (num == 1) {
      outputCommands.push(moves.indexOf(num))
    }
  })



  return outputCommands
}
