export class Triangle {
  lengths: number[]
  validTriangle: boolean
  sortedLengths: number[]

  constructor(...sides: number[]) {
    this.lengths = sides
    this.sortedLengths = sides.sort((a, b) => a - b)
    this.validTriangle = (this.sortedLengths[0] != 0) && (this.sortedLengths[0] + this.sortedLengths[1] >= this.sortedLengths[2])
  }

  // all sides equal
  get isEquilateral(): boolean {
    let allEqual: boolean = this.lengths.every(element => {
      if ((element === this.lengths[0]) && this.validTriangle)
        return true
    })
    return allEqual
  }

  // at least two sides equal
  get isIsosceles(): boolean {
    return ((this.lengths[0] == this.lengths[1] || this.lengths[0] == this.lengths[2] || this.lengths[1] == this.lengths[2]) && this.validTriangle)
  }

  // all sides different
  get isScalene() {
    return ((this.lengths[0] != this.lengths[1] && this.lengths[0] != this.lengths[2] && this.lengths[1] != this.lengths[2]) && this.validTriangle)
  }
}
