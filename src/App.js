import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from './DragAndDrop/Container';
//import HTML5Backend from 'react-dnd-html5-backend';
//import { DragDropContextProvider } from 'react-dnd';
// <DragDropContextProvider backend={HTML5Backend}>
//</DragDropContextProvider>
//import withDragDropContext from './lib/withDragDropContext';


class App extends Component {
  render() {
    return (
      <div className="App" style={ {"margin":"100px"}}>
        <Container />
      </div>
    );
  }
}

export default App;
