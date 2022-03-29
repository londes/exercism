export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  // void function
  // accepts: nothing 
  /// returns: an ability score between 3 and 18
  public static generateAbilityScore(): number {

    // create a new array for our dice roll values, then
    // define our min and max ceiling values for our dice rolls
    let diceRolls: Array<number> = [];
    let min: number = Math.ceil(1);
    let max: number = Math.ceil(7);

    // roll four times, or in other words, "rolling"
    // a random integer from 1-6 and push to our array
    for (let i = 0; i < 4; i++) {
      diceRolls.push(Math.floor(Math.random() * (max - min) + min))
    }

    // for our return statement, we sort lowest to highest, then remove the
    // first value in the array to drop the lowest roll. Then, we sum the
    // remaining values
    return diceRolls.sort().slice(1, 4).reduce((c, d) => c + d);
  }

  // function that calculates the modifier for an ability, which is a dice
  // roll mod calculated based on an ability score.
  // accepts: an ability value
  // returns: roll modifier
  public static getModifierFor(abilityValue: number): number {
    return Math.floor(((abilityValue - 10) / 2));
  }
}
