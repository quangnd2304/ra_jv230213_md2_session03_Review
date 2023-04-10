import logo from './logo.svg';
import './App.css';
import Parent_Comp from './components/Parent_Comp';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent_Comp />
      </div>
    );
  }
}

export default App;
