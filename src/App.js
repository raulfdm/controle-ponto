import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}

export default App;
