import React, { Component } from 'react';
import './App.css';
import CampusMenu from './components/CampusMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UofT Information Finder </h1>
        </header>
        <h1> Welcome! Choose your campus to get started. </h1>
        <CampusMenu />
        <button className="github-link" href="github.com/ayeshans">Github</button>
      </div>
    );
  }
}

export default App;
