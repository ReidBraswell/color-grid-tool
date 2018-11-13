import * as React from 'react';
import tinycolor from 'tinycolor2';

import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;
const GREYSCALE_VALUES = [
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

function generateGreyscaleHex(color: tinycolor.Instance): string {
  const { r, g, b } = color.toRgb();
  const grey = r * 0.3 + g * 0.59 + b * 0.11;
  return tinycolor({ r: grey, g: grey, b: grey }).toHexString();
}

function generateBackground({
  fontSize,
  h,
  s,
  v,
  useGreyscale,
  useSully,
}: {
  fontSize: string;
  h: number;
  s: number;
  v: number;
  useGreyscale: boolean;
  useSully: boolean;
}): string {
  const color = tinycolor({ h, s, v });
  const hex = color.toHexString();
  const greyscale = generateGreyscaleHex(color);
  let backgroundColor;

  if (useGreyscale) {
    backgroundColor = greyscale;
  } else if (useSully) {
    backgroundColor = GREYSCALE_VALUES.indexOf(greyscale) > -1 ? hex : '#fff';
  } else {
    const isReadable = tinycolor.isReadable(hex, '#fff', {
      level: 'AA',
      size: fontSize === '14' ? 'small' : 'large',
    });
    backgroundColor = isReadable ? hex : '#ff0000';
  }

  return backgroundColor;
}

function Grid(props) {
  const { fontSize, hue, useGreyscale, useSully } = props;
  return (
    <div className="gradient">
      {Array(GRID_SIZE)
        .fill('')
        .map((r, v) => (
          <div key={`row-${v}`} className="grid-row">
            {Array(GRID_SIZE)
              .fill('')
              .map((c, s) => {
                const backgroundColor = generateBackground({
                  fontSize,
                  useGreyscale,
                  useSully,
                  h: hue,
                  s: s / 100,
                  v: Math.abs(v - 100) / 100,
                });
                return (
                  <Dot key={`${v}-${s}`} backgroundColor={backgroundColor} />
                );
              })}
          </div>
        ))}
    </div>
  );
}

export default Grid;
