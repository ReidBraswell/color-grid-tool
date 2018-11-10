import * as React from 'react';

import './Dot.css';

function Dot({ hue, x, y }) {
  const style = {
    backgroundColor: `hsl(${hue}, ${x}%, ${y}%)`,
  };

  return <div title={`${x}-${y}`} className="dot" style={style} />;
}

export default Dot;
