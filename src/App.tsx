import * as React from 'react';

import debounce from './debounce';
import Dot from './Dot/Dot';
import './App.css';

type AppProps = {};
type AppState = {
  hue: number;
  hueValue: number;
  useGreyscale: boolean;
  useSully: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      hue: 0,
      hueValue: 0,
      useGreyscale: false,
      useSully: false,
    };
  }

  handleHueSubmit = event => {
    event.preventDefault();
    const { hueValue } = this.state;
    this.setState({ hue: hueValue });
  };

  handleHueChange = event => {
    this.setState({ hueValue: event.target.value });
  };

  handleGreyscaleChange = event => {
    this.setState({ useGreyscale: event.target.checked });
  };

  handleSullyChange = event => {
    this.setState({ useSully: event.target.checked });
  };

  render() {
    const { hue, hueValue, useGreyscale, useSully } = this.state;
    return (
      <React.Fragment>
        <h1>Color Gradient Tool</h1>
        <form noValidate onSubmit={this.handleHueSubmit}>
          <label htmlFor="hueValue">Hue: </label>
          <input
            id="hueValue"
            type="number"
            min="0"
            max="360"
            step="1"
            value={hueValue}
            onChange={this.handleHueChange}
          />
          <button type="submit">Update Hue</button>
        </form>
        <br />
        <label>
          <input
            type="checkbox"
            checked={useGreyscale}
            onChange={this.handleGreyscaleChange}
          />
          Greyscale
        </label>
        <label>
          <input
            type="checkbox"
            checked={useSully}
            onChange={this.handleSullyChange}
          />
          For Sully
        </label>
        <div className="gradient">
          {Array(101)
            .fill(0)
            .map((r, v) => (
              <div key={`row-${v}`} className="row">
                {Array(101)
                  .fill(0)
                  .map((c, s) => (
                    <Dot
                      key={`${v}-${s}`}
                      h={hue}
                      s={s / 100}
                      v={Math.abs(v - 100) / 100}
                      useGreyscale={useGreyscale}
                      useSully={useSully}
                    />
                  ))}
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
