export class Matrix {
  matrix: Array<Array<string>>
  _rows: Array<Array<number>>
  _columns: Array<number>

  constructor(matrixStarter: string) {
    this.matrix = this.createMatrix(matrixStarter);
    this._rows = this.rows;
    this._columns = this.columns
  }

  get rows(): Array<Array<number>> {
    let rowsArray: Array<Array<any>> = this.matrix.slice();

    for (let i = 0; i < rowsArray.length; i++) {
      for (let j = 0; j < rowsArray[i].length; j++) {
        rowsArray[i][j] = parseInt(rowsArray[i][j]);
        console.log('for row value ' + i + ' and column ' + j + ' we have ' + rowsArray[i][j])
      }
    }

    return rowsArray;
  }

  get columns(): Array<number> {
    return [4, 5, 6];
  }

  createMatrix(arrayStarter: string): Array<Array<string>> {
    let newMatrix: Array<Array<string>> = [];
    arrayStarter.slice().split('\n').forEach(value => {
      newMatrix.push(value.split(' '));
    });
    return newMatrix;
  }
}
