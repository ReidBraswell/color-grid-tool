import * as React from 'react';
import tinycolor from 'tinycolor2';

import './Dot.css';

function Dot({ backgroundColor }: { backgroundColor: string }) {
  const { r, g, b } = tinycolor(backgroundColor).toRgb();
  const tip = `Hex: ${backgroundColor}<br />RGB: ${r}, ${g}, ${b}`;
  return (
    <span
      className={backgroundColor === '#fff' ? 'dot' : 'dot hover-target'}
      style={{ backgroundColor }}
      data-tip={backgroundColor !== '#fff' ? tip : ''}
      data-multiline="true"
      data-for="grid-tooltip"
    />
  );
}

export default Dot;
