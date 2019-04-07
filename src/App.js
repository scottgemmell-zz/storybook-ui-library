import React, { Component } from 'react';
import './App.scss';
import Button from './atoms/Button';
import ButtonGroup from './atoms/ButtonGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<h1>
				UI Library
			</h1>
        </header>
		<main>
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
