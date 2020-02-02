import React, { Component } from 'react';
import './App.css';
// import Map from './components/map'
// import FirstComponent from "./components/firstComponent"
// import About from './components/about'
// import Navibar from './components/navbar'
import Logo from './assets/MAP.png';
import splashBackground from './assets/Capture.PNG'



const date = "January 1st"

const tourguide_data = [
  {
      "id": 1,
      "firstName": "Josh",
      "lastName": "Joe",
      "age": 25,
      "gender": "male",
      "latitude" : 43,
      "longitude": -81.2,
      "contact": "666-666-6666"
  },

  {
      "id": 2,
      "firstName": "Sarah",
      "lastName": "Poe",
      "age": 34,
      "gender": "female",
      "latitude" : 43.02,
      "longitude": -81.4,
      "contact": "726-666-8888"
  },

  {
      "id": 3,
      "firstName": "Papa",
      "lastName": "Johns",
      "age": 68,
      "gender": "male",
      "latitude" : 43.06,
      "longitude": -81.03,
      "contact": "565-243-4455"
  }

]

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        numClicks: 0,
        view: 'splash',
        user: null,
        usernameInput: '',
        userChoice: ''
      }
    }
  
  
    render() {
        return(
            <div>
            {this.header()}
            <div className='container'>
                {this.body()}
            </div>
        </div>
        )
    }

    header = () => (
        
        <React.Fragment>
            <div className='header'>
                <div className="logo">
                    <img src={Logo} alt="Global Local" height="60px"/>
                    <h1>GLOBAL LOCAL{this.state.user || ''}</h1>
                </div>
            </div>


        </React.Fragment>

    );

    body = () => {
        const {view, allTweets} = this.state;
        console.log(allTweets);
        if (view === 'splash')
            return this.splashScreen();

        if (view === 'viewing')
            return this.browsingTweetsScreen();

        if (view === 'tweeting')
            return this.sendTweetScreen();
    };

    splashScreen = () => (
        <form onSubmit={this.login}>
            {/* <h1>Username:</h1>
            <input
                className='text-input'
                type="text"
                name="username"
                value={this.state.usernameInput}
                onChange={e => this.setState({usernameInput: e.target.value})}
            /> */}
            <div className="splashBackground">
                <img src={splashBackground} alt="background"/>
            </div>
            
            <br/>
            <br/>
            <br/>
            <input className='button' type="submit" value="Submit"/>
        </form>
    );
    }


export default App;
