export class Matrix {
  matrix: Array<Array<string>>;

  constructor(matrixStarter: string) {
    this.matrix = this.createMatrix(matrixStarter);
  }

  get rows(): Array<string> {
    console.log(this.matrix);
    return [];
  }

  get columns(): Array<string> {
    return [];
  }

  createMatrix(arrayStarter: string): Array<Array<string>> {
    let newMatrix: Array<Array<string>> = [];
    arrayStarter.slice().split('\n').forEach(value => {
      newMatrix.push(value.split(' '));
    });
    return newMatrix;
  }
}
