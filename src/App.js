import React, { Component } from 'react';
import { leggyModel } from './LeggyForm/leggy-model';
import { LeggyForm } from './LeggyForm/leggy-form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeggyForm model={leggyModel}/>
      </div>
    );
  }
}

export default App;
