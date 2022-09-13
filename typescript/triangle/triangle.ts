export class Triangle {
  lengths: number[]

  constructor(...sides: number[]) {
    this.lengths = sides
  }

  // all sides equal
  get isEquilateral() {
    let equal: any[] = this.lengths.map((a, b) => a == b)
    console.log(equal)
    return ''
  }

  // at least two sides equal
  get isIsosceles() {
    throw new Error('Remove this statement and implement this function')
  }

  // all sides different
  get isScalene() {
    throw new Error('Remove this statement and implement this function')
  }
}
