type Roster = { [key: number]: Array<string> };

export class GradeSchool {
  #_roster: Roster = {};

  constructor() {
    this.#_roster = {};
  }

  roster(): Roster {
    return { ...this.#_roster }
  }

  add(inputName: string, inputGrade: number) {
    if (this.#_roster[inputGrade]) {
      this.#_roster[inputGrade] = [...this.#_roster[inputGrade], inputName].sort();
    } else {
      this.#_roster[inputGrade] = [inputName];
    }
  }

  grade(inputGrade: number) {
    return this.#_roster[inputGrade] || [];
  }
}
