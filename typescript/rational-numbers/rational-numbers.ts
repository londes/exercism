export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add = (newRational: Rational) =>{
    this.numerator = (this.numerator * newRational.denominator + this.denominator * newRational.numerator)
    this.denominator = this.denominator * newRational.denominator

    if (this.numerator === 0) {this.denominator=1}

    return this
  }

  sub(newRational: Rational) {
    this.numerator = (this.numerator * newRational.denominator - this.denominator * newRational.numerator)
    this.denominator = this.denominator * newRational.denominator

    if (this.numerator === 0) {this.denominator=1}

    return this
  }

  mul(newRational: Rational) {
    this.numerator = this.numerator * newRational.numerator
    this.denominator = this.denominator * newRational.denominator

    let gcd = this.getGcd(this.numerator, this.denominator)

    this.numerator = this.numerator / gcd
    this.denominator = this.denominator / gcd

    return this
  }

  div(newRational: Rational) {
    return this
  }

  abs() {
    return this
  }

  exprational(exponent: number) {
    return this
  }

  expreal(exponent: number) {
    return this
  }

  reduce() {
    return this
  }

  getGcd (num1: number, num2: number) {
    while (num2) {
      let temp: number = num2
      num2 = num1 % num2
      num1 = temp
    }
    return num1
  }
}
