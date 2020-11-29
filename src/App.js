import React, {Component} from 'react';
//let React = require('react'); 
//let Component = React.Component;
import logo from './logo.svg';
//let logo = require('./logo.svg');
import './App.css';
import Header from './Components/Header/Header.jsx'

class App extends Component {
render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Header/>

      </header>
    </div>
  );
}
}
export default App;
