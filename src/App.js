import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tableData from '../src/data/Table';
import ItemTypes from '../src/components/ItemTypes';
//import Docs from './docs/Docs';
//<Docs />
import Container from './components/Container/Container';
//<Container />

class App extends Component {

  getColumns()
  {
    let result= tableData.columns.map(column => {
                                                  //column['type']=ItemTypes.COLUMN
                                                  column.draggableType = ItemTypes.COLUMN;
                                                  return column;
  })
    console.log(result);
    return result;
  }

  render() {
    return (
      <div className="App" style={ {"margin":"100px"}}>
      <Container columns={this.getColumns()} />
      </div>
    );
  }
}

export default App;
