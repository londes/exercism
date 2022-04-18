export class Robot {
  _name: string;

  constructor() {
    this._name = this.name;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = '';
  }

  public static releaseNames(): void {
    throw new Error('Implement Robot.releaseNames')
  }
}
