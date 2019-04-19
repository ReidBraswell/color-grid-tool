import * as React from 'react';

import { DARK_L_VALUES, SHADES } from './../utilities/colorToLab';

interface IColorControlsProps {
  hueValue: number;
  handleHueValueChange: (e: React.FormEvent<EventTarget>) => void;
  handleHueSubmit: (e: React.FormEvent<EventTarget>) => void;
  showGrayscale: boolean;
  handleGrayscaleChange: (e: React.FormEvent<EventTarget>) => void;
  showColorRamps: boolean;
  handleColorRampsChange: (e: React.FormEvent<EventTarget>) => void;
  colorRampStyle: string;
  handleColorRampStyleChange: (e: React.FormEvent<EventTarget>) => void;
}

class ColorControls extends React.Component<IColorControlsProps> {
  public shouldComponentUpdate(nextProps: IColorControlsProps) {
    if (
      this.props.hueValue !== nextProps.hueValue ||
      this.props.showGrayscale !== nextProps.showGrayscale ||
      this.props.showColorRamps !== nextProps.showColorRamps ||
      this.props.colorRampStyle !== nextProps.colorRampStyle
    ) {
      return true;
    }

    return false;
  }

  public render() {
    const {
      hueValue,
      handleHueValueChange,
      handleHueSubmit,
      showGrayscale,
      handleGrayscaleChange,
      showColorRamps,
      handleColorRampsChange,
      colorRampStyle,
      handleColorRampStyleChange,
    } = this.props;
    return (
      <form noValidate={true} onSubmit={handleHueSubmit}>
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
              onChange={handleHueValueChange}
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
          <fieldset disabled={!showColorRamps}>
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
          <table>
            <thead>
              <tr>
                <th>Shade</th>
                <th>L Value</th>
              </tr>
            </thead>
            <tbody>
              {SHADES.map((shade, index) => (
                <tr key={shade}>
                  <td>{shade}</td>
                  <td>{DARK_L_VALUES[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      </form>
    );
  }
}

export default ColorControls;
