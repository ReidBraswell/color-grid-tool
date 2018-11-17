import * as React from 'react';
import ReactTooltip from 'react-tooltip';

import generateBackgroundColor from '../utilities/generateBackgroundColor';
import Dot from './Dot';
import './DotGrid.css';

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
  const dots = [];
  for (let v = 100; v >= 0; v--) {
    for (let s = 0; s <= 100; s++) {
      const backgroundColor = generateBackgroundColor({
        fontSize,
        showWcagContrast,
        showGrayscale,
        showColorRamps,
        h: hue,
        s: s / 100,
        v: v / 100
      });
      dots.push(<Dot key={`${v}-${s}`} backgroundColor={backgroundColor} />);
    }
  }

  return (
    <React.Fragment>
      <section className="dot-grid">{dots}</section>
      <ReactTooltip id="grid-tooltip" effect="solid" />
    </React.Fragment>
  );
}

export default DotGrid;
