import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map'

const App = () => {
  const APP_ID = "a36541af";
  const APP_KEY = "b8929d43d1f37d1d8545a937c4ec6a36";

  return(
    <div className="App">
      <h1>Global Local</h1>
      <Map />
    </div>
  )
}

export default App;
