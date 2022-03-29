export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
  }

  public static generateAbilityScore(): number {

    let diceRolls: Array<number> = [];
    let min: number = Math.ceil(1);
    let max: number = Math.ceil(6);

    for (let i = 0; i < 3; i++) {
      diceRolls.push(Math.floor(Math.random() * (max - min) + min))
    }

    return diceRolls.sort((a, b) => { a > b }).slice(0, 2).reduce((a, b) => a + b)).pop();
  }

  public static getModifierFor(abilityValue: number): number {
    throw new Error('Remove this statement and implement this function')
  }
}
