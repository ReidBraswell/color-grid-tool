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
            .map((r, x) => (
              <div className="row">
                {Array(101)
                  .fill(0)
                  .map((c, y) => (
                    <Dot key={`${x}${y}`} hue={hue} x={x} y={y} />
                  ))}
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
