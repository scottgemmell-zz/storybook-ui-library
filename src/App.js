import React, { Component } from 'react';
import './App.css';
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
				<Button txt="Reset" />
				<Button txt="Primary" modifier="primary" />
			</ButtonGroup>
		</main>
      </div>
    );
  }
}

export default App;
