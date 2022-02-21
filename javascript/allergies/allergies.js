//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.allergens = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128
    }

    this.score = score;

    this.allergenTable = {
      eggs: false,
      peanuts: false,
      shellfish: false,
      strawberries: false,
      tomatoes: false,
      chocolate: false,
      pollen: false,
      cats: false,
    }

    this.allergenList = [];
  }

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo() {

    throw new Error('Remove this statement and implement this function');
  }
}
