import * as React from 'react';

interface ColorControlsProps {
  showGrayscale: boolean;
  handleGrayscaleChange: (e: React.FormEvent<EventTarget>) => void;
  showColorRamps: boolean;
  handleColorRampsChange: (e: React.FormEvent<EventTarget>) => void;
}

function ColorControls({
  showGrayscale,
  handleGrayscaleChange,
  showColorRamps,
  handleColorRampsChange
}: ColorControlsProps) {
  return (
    <form noValidate className="controls">
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
      </fieldset>
    </form>
  );
}

export default ColorControls;
