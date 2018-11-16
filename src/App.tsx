import * as React from 'react';

import ColorForm from './ColorForm/ColorForm';
import ColorControls from './Controls/ColorControls';
import Grid from './Grid/Grid';
import './App.css';
import WcagControls from './Controls/WcagControls';

type AppProps = {};
type AppState = {
  fontSize: string;
  hue: number;
  hueValue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      fontSize: '14',
      hue: 0,
      hueValue: 0,
      showWcagContrast: false,
      showGrayscale: false,
      showColorRamps: false
    };
  }

  componentDidMount() {
    this.attemptToFetchCachedState();
  }

  attemptToFetchCachedState(): void {
    const colorGridState = localStorage.getItem('colorGridState');
    if (colorGridState) {
      try {
        const state: AppState = JSON.parse(colorGridState);
        this.setState(state);
      } catch (error) {
        console.error(error);
        this.updateLocalStorage();
      }
    } else {
      this.updateLocalStorage();
    }
  }

  updateLocalStorage(): void {
    localStorage.setItem('colorGridState', JSON.stringify(this.state));
  }

  handleFontSizeChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ fontSize: target.value }, this.updateLocalStorage);
  };

  handleHueSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { hueValue } = this.state;
    this.setState({ hue: hueValue }, this.updateLocalStorage);
  };

  handleHueChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState(
      { hueValue: parseInt(target.value, 10) },
      this.updateLocalStorage
    );
  };

  handleWcagContrastChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState(
      { showWcagContrast: target.checked },
      this.updateLocalStorage
    );
  };

  handleGrayscaleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ showGrayscale: target.checked }, this.updateLocalStorage);
  };

  handleColorRampsChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ showColorRamps: target.checked }, this.updateLocalStorage);
  };

  render() {
    const {
      fontSize,
      hue,
      hueValue,
      showWcagContrast,
      showGrayscale,
      showColorRamps
    } = this.state;
    return (
      <React.Fragment>
        <h1>Color Grid Tool</h1>
        <ColorForm
          hueValue={hueValue}
          handleHueChange={this.handleHueChange}
          handleHueSubmit={this.handleHueSubmit}
        />
        <div className="form-grid">
          <WcagControls
            fontSize={fontSize}
            handleFontSizeChange={this.handleFontSizeChange}
            showWcagContrast={showWcagContrast}
            handleWcagContrastChange={this.handleWcagContrastChange}
          />
          <ColorControls
            showGrayscale={showGrayscale}
            handleGrayscaleChange={this.handleGrayscaleChange}
            showColorRamps={showColorRamps}
            handleColorRampsChange={this.handleColorRampsChange}
          />
        </div>
        <Grid
          fontSize={fontSize}
          hue={hue}
          showWcagContrast={showWcagContrast}
          showGrayscale={showGrayscale}
          showColorRamps={showColorRamps}
        />
      </React.Fragment>
    );
  }
}

export default App;
