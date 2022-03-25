export function isLeap(year: number) {

  // return true if the year is divisible by 4, and it is not divisible by 100 unless it's also divisible by 400
  return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)));
}
