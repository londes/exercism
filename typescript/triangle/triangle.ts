export class Triangle {
  lengths: number[]

  constructor(...sides: number[]) {
    this.lengths = sides
  }

  // all sides equal
  get isEquilateral() {
    let allEqual: boolean = this.lengths.every(element => {
      if ((element === this.lengths[0]) && (element !== 0))
        return true
    })
    return allEqual
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
