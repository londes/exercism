import { decode } from "punycode";

export function decodedValue(decodedValue: Array<string>) {

  // define our Band object
  type Band = {
    color: string;
    colorValue: number;
  }

  // build our array of Band objects to compare to the
  // decodedValue
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

  let colorValues: Array<number> = getDecodedValue(decodedValue, bandsArray);
  console.log('color values are: ' + colorValues);

  let decodedNum = Number(colorValues.slice(0, 2).join(''));
  console.log('decoded num is: ' + decodedNum);

  return decodedNum;

  function getDecodedValue(decoded: Array<string>, bands: Array<Band>) {
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
}


