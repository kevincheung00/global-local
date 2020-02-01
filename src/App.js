<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  return(
    <div className="App">
      <h1>Global Local</h1>

    </div>
  )
}

export default App;
=======
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
>>>>>>> 3cae2a1d7c40512d3f54e2130ae5943e9656d27c
