import * as React from 'react';

type ControlsProps = {
  useGrayscale: boolean;
  handleGrayscaleChange: (e: React.FormEvent<EventTarget>) => void;
  useSully: boolean;
  handleSullyChange: (e: React.FormEvent<EventTarget>) => void;
};

function Controls({
  useGrayscale,
  handleGrayscaleChange,
  useSully,
  handleSullyChange
}: ControlsProps) {
  return (
    <form noValidate className="controls">
      <fieldset>
        <legend>Controls</legend>
        <div>
          <input
            id="useGrayscale"
            name="useGrayscale"
            type="checkbox"
            checked={useGrayscale}
            onChange={handleGrayscaleChange}
          />
          <label htmlFor="useGrayscale">Grayscale</label>
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
