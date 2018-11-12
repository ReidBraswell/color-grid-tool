import * as React from 'react';

import ColorForm from './ColorForm/ColorForm';
import Controls from './Controls/Controls';
import Grid from './Grid/Grid';

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
        <h1>Color Grid Tool</h1>
        <ColorForm
          hueValue={hueValue}
          handleHueChange={this.handleHueChange}
          handleHueSubmit={this.handleHueSubmit}
        />
        <Controls
          useGreyscale={useGreyscale}
          handleGreyscaleChange={this.handleGreyscaleChange}
          useSully={useSully}
          handleSullyChange={this.handleSullyChange}
        />
        <Grid hue={hue} useGreyscale={useGreyscale} useSully={useSully} />
      </React.Fragment>
    );
  }
}

export default App;
