export function decodedValue(decodedValue: Array<string>) {
  type Band = {
    color: string;
    colorValue: number;
  }

  let bandsArray: Array<Band> = [
    {
      color: 'black',
      colorValue: 0
    },
    {
      color: 'brown',
      colorValue: 0
    },
    {
      color: 'red',
      colorValue: 0
    },
    {
      color: 'orange',
      colorValue: 0
    },
    {
      color: 'yellow',
      colorValue: 0
    },
    {
      color: 'green',
      colorValue: 0
    },
    {
      color: 'blue',
      colorValue: 0
    },
    {
      color: 'violet',
      colorValue: 0
    },
    {
      color: 'grey',
      colorValue: 0
    },
    {
      color: 'white',
      colorValue: 0
    },
  ]

  let colorValues: Array<number> = [];

  // let valuesArray = decodedValue.forEach(value => {
  //   bandsArray.filter(band => {
  //     return band.color == value;
  //   }).map(() => {
  //     return band.colorValue;
  //   })
  // });

  // return valuesArray;

  // function getValues(decoded: Array<string>, bands: Array<Band>) {
  //   return bands.filter(band => {
  //     return decoded.includes(band.color);
  //   }).map(band => band.colorValue);
  // }
};



