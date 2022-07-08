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
    // look to implemet object to check for existing name, i.e. name : boolean, as opposed to array. Check out map object (lookup table)
    this.#_roster[inputGrade] = this.#_roster[inputGrade] ? [...this.#_roster[inputGrade], inputName].sort() : [inputName]
  }

  grade(inputGrade: number) {
    // spread will work to ensure that grade cannot be modified for later test
    return this.#_roster[inputGrade] || [];
  }
}
