export class Matrix {
  matrix: Array<Array<string>>
  _rows: Array<number>
  _columns: Array<number>

  constructor(matrixStarter: string) {
    this.matrix = this.createMatrix(matrixStarter);
    this._rows = this.rows;
    this._columns = this.columns
  }

  get rows(): Array<number> {
    console.log('matrix: ' + this.matrix);

    let rowsArray: Array<Array<string>> = this.matrix.slice();
    console.log('rowsArray before: ' + rowsArray);
    // let rowsNums: Array<number> = [];

    // for (let i = 0; i < rowsArray.length; i++) {
    //   for (let j = 0; j < rowsArray[i].length; j++) {
    //     parseInt(rowsArray[i][j]);
    //   }
    // }

    // console.log('rowsArray after: ' + rowsArray);

    return [1, 2, 3]
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
