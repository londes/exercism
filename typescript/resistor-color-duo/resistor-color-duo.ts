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

  let colorValues: Array<number> = getValues(decodedValue, bandsArray);

  console.log(colorValues);

  function getValues(decoded: Array<string>, bands: Array<Band>) {
    console.log('we\'re in getValues and decoded is ' + decoded + ' and bands is ' + bands);
    let testArray: Array<number> = bands.filter(band => {
      console.log('we\'re in the testArray filter and band color is: ' + band.color + ' and the match is ' + decoded.includes(band.color));
      return decoded.includes(band.color);
    }).map(band => {
      console.log('we\'re now in the map and band color is ' + band.color + ' and its value is ' + band.colorValue)
      return band.colorValue
    });
    return testArray;
  }
}


