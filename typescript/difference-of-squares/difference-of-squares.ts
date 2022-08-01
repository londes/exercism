export class Squares {
  startingNum: number;

  constructor(count: number) {
    this.startingNum = count
  }

  get sumOfSquares(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.startingNum; i++) {
      sum += i * i
    }
    return sum
  }

  get squareOfSum(): number {
    let sum: number = 0;
    for (let i = 1; i <= this.startingNum; i++) {
      sum += i
    }
    return sum * sum
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
