import React, { Component } from 'react';
import Button from './library/Button';
import ButtonGroup from './library/ButtonGroup';
import Panel from './library/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
			<h1>
				Bada55 UI Library
			</h1>
        </header>
		<main>
			<Panel>
				<h1>
					Lorem ipsum 
				</h1>
				<p>
					Dolor set elit nullum vitae.
				</p>
			</Panel>
			<ButtonGroup>
				<Button>Reset</Button>
				<Button modifier="primary">Primary</Button>
			</ButtonGroup>
		</main>
      </div>
    );
  }
}

export default App;
