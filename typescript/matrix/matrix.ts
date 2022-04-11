export class Matrix {
  rows: number[][];
  columns: number[][];

  constructor(matrixStarter: string) {
    this.rows = matrixStarter.split('\n')
      .map(row => row.split(' ').map(value => Number(value)));

    this.columns = [];

    for (let i = 0; i < this.rows.length; i++) {
      this.columns.push(this.rows.map(row => row[i]));
    }
  }

}

export default Matrix;
