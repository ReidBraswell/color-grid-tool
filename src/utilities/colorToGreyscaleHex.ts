import tinycolor from 'tinycolor2';

export const GREYSCALE_VALUES = [
  '#f2f2f2', // 242
  '#dedede', // 222
  '#c7c7c7', // 199
  '#adadad', // 173
  '#8f8f8f', // 143
  '#737373', // 115
  '#5c5c5c', // 92
  '#474747', // 71
  '#363636', // 54
  '#262626', // 38
];

function colorToGreyscaleHex(color: tinycolor.Instance): string {
  const { r, g, b } = color.toRgb();
  const grey = r * 0.3 + g * 0.59 + b * 0.11;
  return tinycolor({ r: grey, g: grey, b: grey }).toHexString();
}

export default colorToGreyscaleHex;
