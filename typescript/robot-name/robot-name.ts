export class Robot {
  _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    // actually not sure what this is supposed to do?
  }

  private generateName(): string {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let newName = '' + characters.charAt(Math.floor(Math.random() * 26)) + '' + characters.charAt(Math.floor(Math.random() * 26)) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10)

    return newName;
  }
}
