import * as React from 'react';
import * as wcag from 'wcag-contrast';
import tinycolor from 'tinycolor2';

import './Dot.css';

function Dot({ h, s, v, useGreyscale, useSully }) {
  const color = tinycolor({ h, s, v });
  const hex = color.toHexString();
  const greyscale = color.greyscale().toHexString();
  let backgroundColor;

  if (useGreyscale) {
    backgroundColor = greyscale;
  } else {
    const isValid = wcag.hex(hex, '#fff') > 4.5;
    backgroundColor = isValid
      ? useSully && greyscale !== '#737373'
        ? 'white'
        : hex
      : 'red';
  }

  return <span className="dot" style={{ backgroundColor }} />;
}

export default Dot;
