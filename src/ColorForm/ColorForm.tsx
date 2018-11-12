import * as React from 'react';

function ColorForm({ hueValue, handleHueChange, handleHueSubmit }) {
  return (
    <form noValidate onSubmit={handleHueSubmit}>
      <label htmlFor="hueValue">Hue: </label>
      <input
        id="hueValue"
        type="number"
        min="0"
        max="360"
        step="1"
        value={hueValue}
        onChange={handleHueChange}
      />
      <button type="submit">Update Hue</button>
    </form>
  );
}

export default ColorForm;
