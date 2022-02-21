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

    this.updateAllergies();
  }

  updateAllergies() {
    if (this.score >= this.allergens['cats']) {
      console.log('starting score, cats: ' + this.score);
      this.allergenTable['cats'] = true;
      this.score -= this.allergens['cats'];
      console.log('ending score, cats: ' + this.score);
    } 

    else if (this.score >= this.allergens['pollen']) {
      console.log('starting score, pollen: ' + this.score);
      this.allergenTable['pollen'] = true;
      this.score -= this.allergens['pollen'];
      console.log('ending score, pollen: ' + this.score);
    }
    
    else if (this.score >= this.allergens['peanuts']) {
      console.log('starting score, peanuts: ' + this.score);
      this.allergenTable['peanuts'] = true;
      this.score -= this.allergens['peanuts'];
      console.log('ending score, peanuts: ' + this.score);
    }
    
    else if (this.score >= this.allergens['eggs']) {
      console.log('starting score, eggs: ' + this.score);
      this.allergenTable['eggs'] = true;
      this.score -= this.allergens['eggs'];
      console.log('ending score, eggs: ' + this.score);
    }
  }

  list() {
    throw new Error('Remove this statement and implement this function');
  }

  allergicTo(allergen) {
    return this.allergenTable[allergen];
  }
}
