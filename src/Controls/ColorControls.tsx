import * as React from 'react';

interface ColorControlsProps {
  hueValue: number;
  handleHueChange: (e: React.FormEvent<EventTarget>) => void;
  handleHueSubmit: (e: React.FormEvent<EventTarget>) => void;
  showGrayscale: boolean;
  handleGrayscaleChange: (e: React.FormEvent<EventTarget>) => void;
  showColorRamps: boolean;
  handleColorRampsChange: (e: React.FormEvent<EventTarget>) => void;
  colorRampStyle: string;
  handleColorRampStyleChange: (e: React.FormEvent<EventTarget>) => void;
}

function ColorControls({
  hueValue,
  handleHueChange,
  handleHueSubmit,
  showGrayscale,
  handleGrayscaleChange,
  showColorRamps,
  handleColorRampsChange,
  colorRampStyle,
  handleColorRampStyleChange
}: ColorControlsProps) {
  return (
    <form noValidate onSubmit={handleHueSubmit}>
      <fieldset>
        <legend>Color Controls</legend>
        <div>
          <input
            id="showGrayscale"
            name="showGrayscale"
            type="checkbox"
            checked={showGrayscale}
            disabled={showColorRamps}
            onChange={handleGrayscaleChange}
          />
          <label htmlFor="showGrayscale">Grayscale</label>
        </div>
        <fieldset>
          <legend>Hue</legend>
          <input
            type="number"
            min="0"
            max="360"
            step="1"
            value={hueValue}
            onChange={handleHueChange}
          />
          <button type="submit">Update Hue</button>
        </fieldset>
        <div>
          <input
            id="showColorRamps"
            name="showColorRamps"
            type="checkbox"
            checked={showColorRamps}
            disabled={showGrayscale}
            onChange={handleColorRampsChange}
          />
          <label htmlFor="showColorRamps">Color Ramps</label>
        </div>
        <fieldset>
          <legend>Color Ramp Style</legend>
          <div>
            <input
              id="light"
              type="radio"
              name="colorRampStyle"
              value="light"
              checked={colorRampStyle === 'light'}
              onChange={handleColorRampStyleChange}
            />
            <label htmlFor="light">Light</label>
          </div>
          <div>
            <input
              id="dark"
              type="radio"
              name="colorRampStyle"
              value="dark"
              checked={colorRampStyle === 'dark'}
              onChange={handleColorRampStyleChange}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </fieldset>
      </fieldset>
    </form>
  );
}

export default ColorControls;
