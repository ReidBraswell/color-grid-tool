import * as React from 'react';

type ColorFormProps = {
  fontSize: string;
  handleFontSizeChange: (e: React.FormEvent<EventTarget>) => void;
  hueValue: number;
  handleHueChange: (e: React.FormEvent<EventTarget>) => void;
  handleHueSubmit: (e: React.FormEvent<EventTarget>) => void;
};

function ColorForm({
  fontSize,
  handleFontSizeChange,
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
        <fieldset>
          <legend>Font Size (pt)</legend>
          <div>
            <input
              id="14"
              type="radio"
              name="fontSize"
              value="14"
              checked={fontSize === '14'}
              onChange={handleFontSizeChange}
            />
            <label htmlFor="14">14pt</label>
          </div>
          <div>
            <input
              id="18"
              type="radio"
              name="fontSize"
              value="18"
              checked={fontSize === '18'}
              onChange={handleFontSizeChange}
            />
            <label htmlFor="18">18pt</label>
          </div>
        </fieldset>
      </form>
    </React.Fragment>
  );
}

export default ColorForm;
