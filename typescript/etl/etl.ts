type Input = { [key: string]: string[] }
type Output = { [key: string]: number }

export function transform(input: Input): Output {
  let output: Output = {}
  Object.entries(input).forEach(pair => {
    pair[1].forEach(value => {
      output[value.toLowerCase()] = Number(pair[0])
    })
  })
  return output
}
