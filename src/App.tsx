import * as React from 'react';

import ColorForm from './ColorForm/ColorForm';
import Controls from './Controls/Controls';
import Grid from './Grid/Grid';
import './App.css';

type AppProps = {};
type AppState = {
  fontSize: string;
  hue: number;
  hueValue: number;
  useGrayscale: boolean;
  useSully: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fontSize: '14',
      hue: 0,
      hueValue: 0,
      useGrayscale: false,
      useSully: false
    };
  }

  handleFontSizeChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ fontSize: target.value });
  };

  handleHueSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { hueValue } = this.state;
    this.setState({ hue: hueValue });
  };

  handleHueChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ hueValue: parseInt(target.value, 10) });
  };

  handleGrayscaleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ useGrayscale: target.checked });
  };

  handleSullyChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ useSully: target.checked });
  };

  render() {
    const { fontSize, hue, hueValue, useGrayscale, useSully } = this.state;
    return (
      <React.Fragment>
        <h1>Color Grid Tool</h1>
        <ColorForm
          fontSize={fontSize}
          handleFontSizeChange={this.handleFontSizeChange}
          hueValue={hueValue}
          handleHueChange={this.handleHueChange}
          handleHueSubmit={this.handleHueSubmit}
        />
        <Controls
          useGrayscale={useGrayscale}
          handleGrayscaleChange={this.handleGrayscaleChange}
          useSully={useSully}
          handleSullyChange={this.handleSullyChange}
        />
        <Grid
          fontSize={fontSize}
          hue={hue}
          useGrayscale={useGrayscale}
          useSully={useSully}
        />
      </React.Fragment>
    );
  }
}

export default App;
