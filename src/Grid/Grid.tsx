import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { fill } from 'core-js/es6/array';

import generateBackgroundColor from '../utilities/generateBackgroundColor';
import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

interface GridProps {
  fontSize: string;
  hue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
}

function Grid({
  fontSize,
  hue,
  showWcagContrast,
  showGrayscale,
  showColorRamps
}: GridProps) {
  return (
    <React.Fragment>
      <ReactTooltip id="grid-tooltip" effect="solid" />
      <div className="grid">
        {fill(Array(GRID_SIZE), '').map((r, v) => {
          return fill(Array(GRID_SIZE), '').map((c, s) => {
            const backgroundColor = generateBackgroundColor({
              fontSize,
              showWcagContrast,
              showGrayscale,
              showColorRamps,
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
