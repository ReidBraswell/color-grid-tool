import * as React from 'react';
import tinycolor from 'tinycolor2';
import ReactTooltip from 'react-tooltip';

import colorToLab, { L_VALUES } from '../utilities/colorToLab';
import colorToGreyscaleHex from '../utilities/colorToGreyscaleHex';
import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

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
  const greyscale = colorToGreyscaleHex(color);
  const { l } = colorToLab(color);
  let backgroundColor;

  if (useGreyscale) {
    backgroundColor = greyscale;
  } else if (useSully) {
    backgroundColor = L_VALUES.indexOf(Math.round(l)) > -1 ? hex : '#fff';
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
    <React.Fragment>
      <ReactTooltip id="grid-tooltip" effect="solid" />
      <div className="grid">
        {Array(GRID_SIZE)
          .fill('')
          .map((r, v) => {
            return Array(GRID_SIZE)
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
              });
          })}
      </div>
    </React.Fragment>
  );
}

export default Grid;
