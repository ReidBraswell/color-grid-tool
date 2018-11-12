import * as React from 'react';

function Controls({
  useGreyscale,
  handleGreyscaleChange,
  useSully,
  handleSullyChange,
}) {
  return (
    <div className="controls">
      <label>
        <input
          type="checkbox"
          checked={useGreyscale}
          onChange={handleGreyscaleChange}
        />
        Greyscale
      </label>
      <label>
        <input
          type="checkbox"
          checked={useSully}
          onChange={handleSullyChange}
        />
        For Sully
      </label>
    </div>
  );
}

export default Controls;
