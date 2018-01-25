import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Docs from './docs/Docs';
//import Container from './components/Container/Container';
//import HTML5Backend from 'react-dnd-html5-backend';
//<Container />

class App extends Component {
  render() {
    return (
      <div className="App" style={ {"margin":"100px"}}>

        <Docs />
      </div>
    );
  }
}

export default App;
