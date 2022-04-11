export class Matrix {
  matrix: Array<Array<number>>
  _rows: Array<Array<number>>
  _columns: Array<Array<number>>

  constructor(matrixStarter: string) {
    this.matrix = this.createMatrix(matrixStarter);
    this._rows = this.rows;
    this._columns = this.columns
  }

  // our matrix is already sorted into rows, so just
  // return the requested index value
  get rows(): Array<Array<number>> {
    return this.matrix
  }

  // we have to rebuild the matrix by iterating into
  // each column to push its values into an array, then
  // push that column value array into our columns matrix
  get columns(): Array<Array<number>> {
    let newColumns: Array<Array<number>> = [];

    for (let i = 0; i < this.matrix.length; i++) {
      let oneColumn: Array<number> = [];
      for (let j = 0; j < this.matrix.length; j++) {
        oneColumn.push(this.matrix[j][i]);
      }
      newColumns.push(oneColumn);
    }

    return newColumns;
  }

  // copy our starting matrix except that we're returing a new
  // version of that matrix with numbers instead of strings
  createMatrix(arrayStarter: string): Array<Array<number>> {

    // declare a new array of type any, because we are modifying
    // its values from strings into numbers so it needs to be able
    // to hold both.
    let newMatrix: Array<Array<any>> = [];

    arrayStarter.slice().split('\n').forEach(value => {
      newMatrix.push(value.split(' '));
    });

    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < newMatrix[i].length; j++) {
        newMatrix[i][j] = parseInt(newMatrix[i][j]);
      }
    }

    return newMatrix;
  }
}
