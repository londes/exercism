export function transform(input: { [key: string]: string }): { [key: string]: number } {
  let output: { [key: string]: number } = {}
  Object.entries(input).forEach(pair => {
    console.log(pair)
  })
  return {}
}
