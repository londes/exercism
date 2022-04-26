export class GradeSchool {
  _roster: { grade: number; nameArray: Array<string> };

  constructor() {
    _roster: this.roster();
  }

  roster(): object {
    return {};
  }

  add(inputName: string, inputGrade: number) {
    Object.values(GradeSchool)[inputGrade - 1].push(inputName)
  }

  grade() {
    throw new Error('Remove this statement and implement this function')
  }
}
