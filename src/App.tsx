import * as React from 'react';

import Dot from './Dot/Dot';
import './App.css';

class App extends React.Component {
  state = {
    hue: 0,
  };

  handleHueChange = event => {
    this.setState({ hue: event.target.value });
  };

  render() {
    const { hue } = this.state;
    return (
      <React.Fragment>
        <h1>Color Gradient Tool</h1>
        <label htmlFor="hue">Hue: </label>
        <input
          id="hue"
          type="number"
          min="0"
          max="360"
          step="1"
          value={hue}
          onChange={this.handleHueChange}
        />
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
