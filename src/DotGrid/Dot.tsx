import * as React from 'react';
import tinycolor from 'tinycolor2';

import './Dot.scss';

function Dot({ backgroundColor }: { backgroundColor: string }) {
  const { r, g, b } = tinycolor(backgroundColor).toRgb();
  const tip = `${backgroundColor}<br />rgb(${r}, ${g}, ${b})`;
  return (
    <span
      className={backgroundColor === '#fff' ? 'dot' : 'dot hover-target'}
      style={{ backgroundColor }}
      data-clipboard-text={backgroundColor}
      data-tip={backgroundColor !== '#fff' ? tip : ''}
      data-multiline="true"
      data-for="grid-tooltip"
    />
  );
}

export default Dot;
