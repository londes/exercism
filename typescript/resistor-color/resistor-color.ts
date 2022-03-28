
// our COLORS correspond in mnemonic fashion to their
// number value. So we can just return the index
// of the color passed in
export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
}

// mnemonic array of colors
export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
