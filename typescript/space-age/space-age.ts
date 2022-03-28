export function age(planet: string, seconds: number): number {

  // define an Earth year based on seconds so we can use the 
  // different planetary year lengths as a divisor
  const earthYear: number = seconds / 60 / 60 / 24 / 365.25;

  // object containing each planet and its relative year
  // length to an earth year
  const planetYearQuotient: { [k: string]: number } = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  }

  // divide the length of an earth year by the appropriate
  // planet's relative year length, round to two decimal points, and
  // convert it back into a number
  return Number((earthYear / planetYearQuotient[planet]).toFixed(2));
}
