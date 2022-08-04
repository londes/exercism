export function commands(input: number): Array<string> {

  console.log('number is: ' + input)
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
  let binaryNums: Array<number> = binary.split('').map(parseInt).reverse();

  console.log('binaryNums is: ' + binaryNums)

  for (let i = 0; i < binaryNums.length; i++) {
    if (binaryNums[i] == 1)
      outputCommands.push(moves[i])
  }

  if (outputCommands.includes('reverse')) {
    outputCommands.pop()
    outputCommands.reverse()
  }

  console.log('outputCommands right before returnning is: ' + outputCommands)
  return outputCommands
}
