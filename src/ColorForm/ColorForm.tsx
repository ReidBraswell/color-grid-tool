import * as React from 'react';

type ColorFormProps = {
  hueValue: number;
  handleHueChange: (e: React.FormEvent<EventTarget>) => void;
  handleHueSubmit: (e: React.FormEvent<EventTarget>) => void;
};

function ColorForm({
  hueValue,
  handleHueChange,
  handleHueSubmit
}: ColorFormProps) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default ColorForm;
