import ClipboardJS from 'clipboard';
import * as React from 'react';

import ColorControls from './Controls/ColorControls';
import WcagControls from './Controls/WcagControls';
import DotGrid from './DotGrid/DotGrid';

import './App.scss';

// tslint:disable-next-line: no-empty-interface
interface IAppProps {}
interface IAppState {
  colorRampStyle: string;
  fontSize: string;
  hue: number;
  hueValue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  private clipboard!: ClipboardJS;

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      colorRampStyle: 'dark',
      fontSize: '14',
      hue: 0,
      hueValue: 0,
      showColorRamps: false,
      showGrayscale: false,
      showWcagContrast: false,
    };
  }

  public componentDidMount() {
    this.attemptToFetchCachedState();
    this.clipboard = new ClipboardJS('.hover-target');
  }

  public componentWillUnmount() {
    this.clipboard.destroy();
  }

  public render() {
    const {
      colorRampStyle,
      fontSize,
      hue,
      hueValue,
      showWcagContrast,
      showGrayscale,
      showColorRamps,
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

  private attemptToFetchCachedState(): void {
    const colorGridState = localStorage.getItem('colorGridState');
    if (colorGridState) {
      try {
        const state: IAppState = JSON.parse(colorGridState);
        this.setState(state);
      } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(error);
        this.updateLocalStorage();
      }
    } else {
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem('colorGridState', JSON.stringify(this.state));
  }

  private handleFontSizeChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ fontSize: target.value }, this.updateLocalStorage);
  };

  private handleHueSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { hueValue } = this.state;
    this.setState({ hue: hueValue }, this.updateLocalStorage);
  };

  private handleHueValueChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState(
      { hueValue: parseInt(target.value, 10) },
      this.updateLocalStorage
    );
  };

  private handleWcagContrastChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState(
      { showWcagContrast: target.checked },
      this.updateLocalStorage
    );
  };

  private handleGrayscaleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ showGrayscale: target.checked }, this.updateLocalStorage);
  };

  private handleColorRampsChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ showColorRamps: target.checked }, this.updateLocalStorage);
  };

  private handleColorRampStyleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    this.setState({ colorRampStyle: target.value }, this.updateLocalStorage);
  };
}

export default App;
