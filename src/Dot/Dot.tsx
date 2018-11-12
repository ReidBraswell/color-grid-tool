import * as React from 'react';

import hsvToRgb from '../hsvToRgb';
import './Dot.css';

function Dot({ h, s, v }) {
  const { r, g, b } = hsvToRgb(h, s, v);
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return <div className="dot" style={style} />;
}

export default Dot;
