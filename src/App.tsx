import * as React from 'react';
import ClipboardJS from 'clipboard';

import ColorControls from './Controls/ColorControls';
import WcagControls from './Controls/WcagControls';
import DotGrid from './DotGrid/DotGrid';
import './App.scss';

type AppProps = {};
type AppState = {
  colorRampStyle: string;
  fontSize: string;
  hue: number;
  hueValue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
};

class App extends React.Component<AppProps, AppState> {
  clipboard!: ClipboardJS;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      colorRampStyle: 'light',
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
    this.clipboard = new ClipboardJS('.hover-target');
  }

  componentWillUnmount() {
    this.clipboard.destroy();
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

  handleHueValueChange = (e: React.FormEvent<EventTarget>) => {
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

  handleColorRampStyleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ colorRampStyle: target.value }, this.updateLocalStorage);
  };

  render() {
    const {
      colorRampStyle,
      fontSize,
      hue,
      hueValue,
      showWcagContrast,
      showGrayscale,
      showColorRamps
    } = this.state;
    return (
      <React.Fragment>
        <aside className="form-grid">
          <h1>Color Grid Tool</h1>
          <ColorControls
            hueValue={hueValue}
            handleHueValueChange={this.handleHueValueChange}
            handleHueSubmit={this.handleHueSubmit}
            showGrayscale={showGrayscale}
            handleGrayscaleChange={this.handleGrayscaleChange}
            showColorRamps={showColorRamps}
            handleColorRampsChange={this.handleColorRampsChange}
            colorRampStyle={colorRampStyle}
            handleColorRampStyleChange={this.handleColorRampStyleChange}
          />
          <WcagControls
            fontSize={fontSize}
            handleFontSizeChange={this.handleFontSizeChange}
            showWcagContrast={showWcagContrast}
            handleWcagContrastChange={this.handleWcagContrastChange}
          />
        </aside>
        <DotGrid
          colorRampStyle={colorRampStyle}
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
