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
    return this
  }


  sub(newRational: Rational) {
    return this
  }

  mul(newRational: Rational) {
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
}
