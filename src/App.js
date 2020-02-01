import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { hashRouter } from "react-router-dom"
import Map from './components/map'
import FirstComponent from "./components/firstComponent"
import About from './components/about'
import Navibar from './components/navbar'

const date = "January 1st"

const tourguide_data = [
  {
    name: "Kevin Cheung",
    age: 19,
    rating: 5

  },

  {
    name: "Jason Kim",
    age: 19,
    rating: 5
  },

  {
    name: "Alvina Lin",
    age: 19,
    rating: 5
  },

  {
    name: "Fland Pan",
    age: 19,
    rating: 5
  },
  
  {
    name: "Leanne Li",
    age: 19,
    rating: 5
  }

]

class App extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    
    //   }
    // }
  
  
  render() {
      return(
        <div className="App">
          <h1>Global Local</h1>
          <About />
          <Map />

        </div>
      )
  }}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>


export default App;
