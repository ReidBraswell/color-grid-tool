import * as React from 'react';
import tinycolor from 'tinycolor2';

import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

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
  } else {
    const isReadable = tinycolor.isReadable(hex, '#fff', {
      level: 'AA',
      size: fontSize === '14' ? 'small' : 'large',
    });
    backgroundColor = isReadable
      ? useSully && greyscale !== '#737373'
        ? 'white'
        : hex
      : 'red';
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
