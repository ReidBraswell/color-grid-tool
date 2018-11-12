import * as React from 'react';

import Dot from '../Dot/Dot';
import './Grid.css';

const GRID_SIZE = 101;

function Grid({ hue, useGreyscale, useSully }) {
  return (
    <div className="gradient">
      {Array(GRID_SIZE)
        .fill('')
        .map((r, v) => (
          <div key={`row-${v}`} className="grid-row">
            {Array(GRID_SIZE)
              .fill('')
              .map((c, s) => (
                <Dot
                  key={`${v}-${s}`}
                  h={hue}
                  s={s / 100}
                  v={Math.abs(v - 100) / 100}
                  useGreyscale={useGreyscale}
                  useSully={useSully}
                />
              ))}
          </div>
        ))}
    </div>
  );
}

export default Grid;
