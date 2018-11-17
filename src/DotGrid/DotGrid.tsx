import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { fill } from 'core-js/es6/array';

import generateBackgroundColor from '../utilities/generateBackgroundColor';
import Dot from './Dot';
import './DotGrid.css';

const GRID_SIZE = 101;

interface DotGridProps {
  fontSize: string;
  hue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
}

function DotGrid({
  fontSize,
  hue,
  showWcagContrast,
  showGrayscale,
  showColorRamps
}: DotGridProps) {
  return (
    <React.Fragment>
      <ReactTooltip id="grid-tooltip" effect="solid" />
      <div className="dot-grid">
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

export default DotGrid;
