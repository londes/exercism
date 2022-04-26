export class GradeSchool {
  _roster: { grade: number; nameArray: Array<string> };

  constructor() {
    _roster: this.roster();
  }

  roster(): object {
    return { 1: [''], 2: [''] };
  }

  add(name: string, grade: number): any {
    this._roster.grade
  }

  grade() {
    throw new Error('Remove this statement and implement this function')
  }
}
