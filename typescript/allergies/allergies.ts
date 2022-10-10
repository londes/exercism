export class Allergies {
  index: number;
  allergens: { [key: string]: number }

  constructor(allergenIndex: number) {
    this.index = allergenIndex
    this.allergens = {
      'eggs': 1,
      'peanuts': 2,
      'shellfish': 4,
      'strawberries': 8,
      'tomatoes': 16,
      'chocolate': 32,
      'pollen': 64,
      'cats': 128
    }
  }

  public list(): string[] {
    return []
  }

  public allergicTo(allergen: string): boolean {
    throw new Error('Remove this statement and implement this function')
  }
}
