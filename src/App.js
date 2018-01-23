import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import XAxis from './XAxis';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';



class App extends Component {
  render() {
    return (
       <DragDropContextProvider backend={HTML5Backend}>
      <div className="App">
        <Card text='Write the docs' />
        <br />
        <XAxis />
      </div>
       </DragDropContextProvider>

    );
  }
}

export default App;
