export function score(x: number, y: number): number {
  let distance: number = Math.sqrt(x ** 2 + y ** 2)
  console.log('number is: ' + distance )
  if (distance <= 1)
    return 10
  else if (distance <= 5)
    return 5
  else if (distance <= 10)
    return 1
  return 0
}
