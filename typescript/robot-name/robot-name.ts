export class Robot {
  _name: string;
  usedNames: Set<string>;

  constructor() {
    this._name = this.generateName();
    this.usedNames = new Set();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
    // terrible code below
    // while (!this.usedNames.has(testName)) {
    //   console.log(testName)
    //   this.usedNames.add(testName)
    //   this._name = testName
    // }
  }

  public static releaseNames(): void {
  }

  private generateName(): string {
    let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let newName = '' + characters.charAt(Math.floor(Math.random() * 26)) + '' + characters.charAt(Math.floor(Math.random() * 26)) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10)

    return newName
  }
}
