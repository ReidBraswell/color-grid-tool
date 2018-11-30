import tinycolor from 'tinycolor2';

import colorToLab, {
  DARK_L_VALUES,
  LIGHT_L_VALUES
} from '../utilities/colorToLab';
import colorToGrayscaleHex from '../utilities/colorToGrayscaleHex';
import checkIsReadable from './checkIsReadable';

interface GenerateBackgroundColor {
  colorRampStyle: string;
  fontSize: string;
  h: number;
  s: number;
  v: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
}

export default function generateBackgroundColor({
  colorRampStyle,
  fontSize,
  h,
  s,
  v,
  showWcagContrast,
  showGrayscale,
  showColorRamps
}: GenerateBackgroundColor): string {
  const color = tinycolor({ h, s, v });
  const hex = color.toHexString();
  const isReadable = checkIsReadable({ fontSize, hex });
  const { l } = colorToLab(color);

  if (showGrayscale) {
    return colorToGrayscaleHex(color);
  }

  if (showColorRamps) {
    const L_VALUES =
      colorRampStyle === 'light' ? LIGHT_L_VALUES : DARK_L_VALUES;
    return L_VALUES.indexOf(Math.round(l)) > -1
      ? showWcagContrast && !isReadable
        ? '#fff'
        : hex
      : '#fff';
  }

  return showWcagContrast && !isReadable ? '#ff0000' : hex;
}
