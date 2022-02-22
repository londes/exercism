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
      console.log('*** in cats ***');
      console.log('starting score, cats: ' + this.score);
      this.allergenTable['cats'] = true;
      this.allergenList.push('cats');
      this.score -= this.allergens['cats'];
      console.log('ending score, cats: ' + this.score);
    } 

    if (this.score >= this.allergens['pollen']) {
      console.log('** in pollen **');
      console.log('starting score, pollen: ' + this.score);
      this.allergenTable['pollen'] = true;
      this.allergenList.push('pollen');
      this.score -= this.allergens['pollen'];
      console.log('ending score, pollen: ' + this.score);
    }

    if (this.score >= this.allergens['chocolate']) {
      console.log('** in chocolate **');
      console.log('starting score, chocolate: ' + this.score);
      this.allergenTable['chocolate'] = true;
      this.allergenList.push('chocolate');
      this.score -= this.allergens['chocolate'];
      console.log('ending score, chocolate: ' + this.score);
    }

    if (this.score >= this.allergens['tomatoes']) {
      console.log('** in tomatoes **');
      console.log('starting score, tomatoes: ' + this.score);
      this.allergenTable['tomatoes'] = true;
      this.allergenList.push('tomatoes');
      this.score -= this.allergens['tomatoes'];
      console.log('ending score, tomatoes: ' + this.score);
    }

    if (this.score >= this.allergens['strawberries']) {
      console.log('** in strawberries **');
      console.log('starting score, strawberries: ' + this.score);
      this.allergenTable['strawberries'] = true;
      this.allergenList.push('strawberries');
      this.score -= this.allergens['strawberries'];
      console.log('ending score, strawberries: ' + this.score);
    }

    if (this.score >= this.allergens['shellfish']) {
      console.log('** in shellfish **');
      console.log('starting score, shellfish: ' + this.score);
      this.allergenTable['shellfish'] = true;
      this.allergenList.push('shellfish');
      this.score -= this.allergens['shellfish'];
      console.log('ending score, shellfish: ' + this.score);
    }
    
    if (this.score >= this.allergens['peanuts']) {
      console.log('** in peanuts **');
      console.log('starting score, peanuts: ' + this.score);
      this.allergenTable['peanuts'] = true;
      this.allergenList.push('peanuts');
      console.log('pushing value: peanuts');
      console.log('array after peanuts: ' + this.allergenList);
      this.score -= this.allergens['peanuts'];
      console.log('ending score, peanuts: ' + this.score);
    }
    
    if (this.score >= this.allergens['eggs']) {
      console.log('*** in eggs ***');
      console.log('starting score, eggs: ' + this.score);
      this.allergenTable['eggs'] = true;
      this.allergenList.push('eggs');
      console.log('pushing value: eggs');
      console.log('array after eggs: ' + this.allergenList);
      this.score -= this.allergens['eggs'];
      console.log('ending score, eggs: ' + this.score);
    }
  }

  list() {
    console.log('in list() funciton: ' + this.allergenList.reverse());
    return this.allergenList.reverse();
  }

  allergicTo(allergen) {
    return this.allergenTable[allergen];
  }
}
