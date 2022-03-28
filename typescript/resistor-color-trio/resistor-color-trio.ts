export function decodedResistorValue(decodedValue: Array<string>): string {

  // define our Band object
  type Band = {
    color: string;
    colorValue: number;
  }

  // build our array of Band objects to compare to the
  // decodedValue array color values
  let bandsArray: Array<Band> = [
    {
      color: 'black',
      colorValue: 0
    },
    {
      color: 'brown',
      colorValue: 1
    },
    {
      color: 'red',
      colorValue: 2
    },
    {
      color: 'orange',
      colorValue: 3
    },
    {
      color: 'yellow',
      colorValue: 4
    },
    {
      color: 'green',
      colorValue: 5
    },
    {
      color: 'blue',
      colorValue: 6
    },
    {
      color: 'violet',
      colorValue: 7
    },
    {
      color: 'grey',
      colorValue: 8
    },
    {
      color: 'white',
      colorValue: 9
    },
  ]

  // creates a new array of the decoded color values
  // that match to the input color name string
  let colorValues: Array<number> = getDecodedValue(decodedValue, bandsArray);
  console.log('color values are: ' + colorValues);

  // slice the first two in case of >2 color names
  // and join them to create a number that satisfies our
  // test
  let decodedNum = Number(colorValues.slice(0, 2).join(''));

  // this operation takes the first two numbers of ourray after being combined,
  // then multiplies them by the appropriate magnitude of 10 to get the
  // correct amount of zeros to append.
  decodedNum = decodedNum * Math.pow(10, Number(colorValues[2]));
  console.log('decoded num is: ' + decodedNum);

  // our return statement checks for a value less than 1000. If so, we know it's
  // ohms and just to return as is. If not, output should be divided by one thousand
  // and expressed as kiloohms
  return (decodedNum < 1000) ? (decodedNum + ' ohms') : (decodedNum / 1000 + ' kiloohms');

  // accepts: our color values we need to 
  // decode, and our Bands array object
  // returns: an array of color values that correspond
  // to the color name in our Bands array
  function getDecodedValue(decoded: Array<string>, bands: Array<Band>): Array<number> {
    let colorValuesArray: Array<number> = [];
    decoded.forEach(color => {
      bands.forEach(band => {
        if (color === band.color) {
          colorValuesArray.push(band.colorValue);
        }
      })
    })
    return colorValuesArray;
  }

  function buildResistorValue(digits: number, numZeros: number): number {

    return 1;
  }
}
