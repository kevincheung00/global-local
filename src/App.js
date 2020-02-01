import React from 'react';
import './App.css';
import Map from './components/map'


class App extends React.Component {

  render() {
    return(
      <div className="App">
        <h1>Global Local</h1>
        <Map />
      </div>
    );
  }
}

export default App;
