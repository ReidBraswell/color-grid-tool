import tinycolor from 'tinycolor2';

export const DARK_L_VALUES = [
  96, // 50
  88, // 100
  80, // 200
  71, // 300
  59, // 400
  48, // 500
  39, // 600
  30, // 700
  21, // 800
  15 // 900
];

export const LIGHT_L_VALUES = [
  96, // 50
  92, // 100
  87, // 200
  81, // 300
  76 // 400
];

interface rgb {
  r: number;
  g: number;
  b: number;
}

interface lab {
  l: number;
  a: number;
  b: number;
}

function rgbToLab({ r, g, b }: rgb): lab {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  let x, y, z;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return { l: 116 * y - 16, a: 500 * (x - y), b: 200 * (y - z) };
}

function colorToLab(color: tinycolor.Instance): lab {
  return rgbToLab(color.toRgb());
}

export default colorToLab;
