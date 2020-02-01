import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { hashRouter } from "react-router-dom"
import Map from './components/map'
import FirstComponent from "./components/firstComponent"
import About from './components/about'

// const App = () => {
//   const APP_ID = "a36541af";
//   const APP_KEY = "b8929d43d1f37d1d8545a937c4ec6a36";
//
//   return(
//     <div className="App">
//       <h1>Global Local</h1>
//       <FirstComponent displaytext="Kevin"/>
//     </div>
//   )
// }

class App extends Component {
  render() {
    // return (
    //         <Router history={hashHistory}>
    //         <Route path='/' component={Home} />
    //         <Route path='/address' component={Address} />
    //         </Router>
    //       )
      return(
        <div className="App">
          <h1>Global Local</h1>
          <About />
        </div>
      )
  }}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>


export default App;
