export class Robot {
  _name: string;

  constructor() {
    this._name = this.name;
  }

  public get name(): string {
    return this.generateName();
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    // actually not sure what this is supposed to do?
  }

  private generateName(): string {
    return 'GG123'
  }
}
