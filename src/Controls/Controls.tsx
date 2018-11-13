import * as React from 'react';

function Controls({
  useGreyscale,
  handleGreyscaleChange,
  useSully,
  handleSullyChange,
}) {
  return (
    <form noValidate className="controls">
      <fieldset>
        <legend>Controls</legend>
        <div>
          <input
            id="useGreyscale"
            name="useGreyscale"
            type="checkbox"
            checked={useGreyscale}
            onChange={handleGreyscaleChange}
          />
          <label htmlFor="useGreyscale">Greyscale</label>
        </div>
        <div>
          <input
            id="useSully"
            name="useSully"
            type="checkbox"
            checked={useSully}
            onChange={handleSullyChange}
          />
          <label htmlFor="useSully">For Sully</label>
        </div>
      </fieldset>
    </form>
  );
}

export default Controls;
