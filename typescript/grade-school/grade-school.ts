type Roster = { [key: number]: Array<string> };

export class GradeSchool {
  #_roster: Roster = {};

  constructor() {
    this.#_roster = {};
  }

  roster(): Roster {
    // this creates a deep copy as opposed to spread which
    // creates a shallow copy
    return JSON.parse(JSON.stringify(this.#_roster))
  }

  add(inputName: string, inputGrade: number) {
    this.#_roster[inputGrade] = this.#_roster[inputGrade] ? [...this.#_roster[inputGrade], inputName].sort() : [inputName]
  }

  grade(inputGrade: number) {
    return this.#_roster[inputGrade] || [];
  }
}
