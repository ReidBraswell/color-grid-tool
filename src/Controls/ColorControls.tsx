import * as React from 'react';

interface ColorControlsProps {
  showGrayscale: boolean;
  handleGrayscaleChange: (e: React.FormEvent<EventTarget>) => void;
  showColorRamps: boolean;
  handleColorRampsChange: (e: React.FormEvent<EventTarget>) => void;
  hueValue: number;
  handleHueChange: (e: React.FormEvent<EventTarget>) => void;
  handleHueSubmit: (e: React.FormEvent<EventTarget>) => void;
}

function ColorControls({
  showGrayscale,
  handleGrayscaleChange,
  showColorRamps,
  handleColorRampsChange,
  hueValue,
  handleHueChange,
  handleHueSubmit
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
      </fieldset>
    </form>
  );
}

export default ColorControls;
