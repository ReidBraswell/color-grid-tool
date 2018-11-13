import * as React from 'react';
import * as wcag from 'wcag-contrast';
import tinycolor from 'tinycolor2';

import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

function generateBackgroundColor({
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
  const greyscale = color.greyscale().toHexString();
  let backgroundColor;

  if (useGreyscale) {
    backgroundColor = greyscale;
  } else {
    const ratio = wcag.hex(hex, '#fff');
    const isValid =
      (fontSize === '14' && ratio >= 4.5) || (fontSize === '18' && ratio >= 3);
    backgroundColor = isValid
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
                const backgroundColor = generateBackgroundColor({
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
