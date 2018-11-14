import * as React from 'react';
import tinycolor from 'tinycolor2';
import ReactTooltip from 'react-tooltip';
import { fill } from 'core-js/es6/array';

import colorToLab, { L_VALUES } from '../utilities/colorToLab';
import colorToGrayscaleHex from '../utilities/colorToGrayscaleHex';
import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

function generateBackground({
  fontSize,
  h,
  s,
  v,
  useGrayscale,
  useSully
}: {
  fontSize: string;
  h: number;
  s: number;
  v: number;
  useGrayscale: boolean;
  useSully: boolean;
}): string {
  const color = tinycolor({ h, s, v });
  const hex = color.toHexString();
  const grayscale = colorToGrayscaleHex(color);
  const { l } = colorToLab(color);
  let backgroundColor;

  if (useGrayscale) {
    backgroundColor = grayscale;
  } else if (useSully) {
    backgroundColor = L_VALUES.indexOf(Math.round(l)) > -1 ? hex : '#fff';
  } else {
    const isReadable = tinycolor.isReadable(hex, '#fff', {
      level: 'AA',
      size: fontSize === '14' ? 'small' : 'large'
    });
    backgroundColor = isReadable ? hex : '#ff0000';
  }

  return backgroundColor;
}

type GridProps = {
  fontSize: string;
  hue: number;
  useGrayscale: boolean;
  useSully: boolean;
};

function Grid({ fontSize, hue, useGrayscale, useSully }: GridProps) {
  return (
    <React.Fragment>
      <ReactTooltip id="grid-tooltip" effect="solid" />
      <div className="grid">
        {fill(Array(GRID_SIZE), '').map((r, v) => {
          return fill(Array(GRID_SIZE), '').map((c, s) => {
            const backgroundColor = generateBackground({
              fontSize,
              useGrayscale,
              useSully,
              h: hue,
              s: s / 100,
              v: Math.abs(v - 100) / 100
            });
            return <Dot key={`${v}-${s}`} backgroundColor={backgroundColor} />;
          });
        })}
      </div>
    </React.Fragment>
  );
}

export default Grid;
