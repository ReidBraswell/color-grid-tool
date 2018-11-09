import * as React from 'react';

class App extends React.Component {
  state = {
    hueDegree: 0,
  };

  handleHueChange = event => {
    this.setState({ hueDegree: event.target.value });
  };

  render() {
    const { hueDegree } = this.state;
    return (
      <React.Fragment>
        <h1>Color Gradient Tool</h1>
        <label htmlFor="hueDegree">Hue: </label>
        <input id="hueDegree" type="number" value={hueDegree} min="0" max="360" step="1" onChange={this.handleHueChange} />
      </React.Fragment>
    );
  }
}

export default App;
