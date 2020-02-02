import React, { Component } from 'react';
import './App.css';
// import Map from './components/map'
// import FirstComponent from "./components/firstComponent"
// import About from './components/about'
// import Navibar from './components/navbar'
import Logo from './assets/MAP.PNG';
import girl from './assets/GIRL.PNG';
import travelGuy from './assets/BACKGROUNDDD.PNG';
import refreshSHIT from './assets/RefreshShit.png';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import splashBackground from './assets/Capture.PNG'


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
<<<<<<< HEAD
        view: 'splash',
=======
        view: 'questionaire3',
>>>>>>> d5dcf78a130cf4664e2b8cc79448639f24703615
        user: null,
        usernameInput: '',
        userChoice: ''
      }
    }
  
    render() {
        return(
            <div className="all">
            {this.header()}
                {this.body()}

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

        if (view === 'signup')
            return this.signupScreen();

        if (view === 'viewing')
            return this.browsingTweetsScreen();

        else if (view === 'tweeting')
            return this.sendTweetScreen();
        else if (view === 'login')
            return this.loginscreen();
        else if (view === 'questionaire2')
            return this.questionaire2();
        else if (view === 'touristProfile')
            return this.touristProfile();
        else if (view === 'questionaire3')
            return this.questionaire3();
    };

    questionaire2 = () => (
        <div className= 'questionaire'>
            <h1 style={{textAlign: "left"}}>What's next on your bucketlist</h1>
            <div className= 'travelGuy'>
                <img src={travelGuy} style={{position: "fixed",left: "15%",top: "25%"}}/>
            </div>
            <div>
                <Form>
                    <Form.Group controlId="formBasicPassword" style={{position: "fixed",left: "50%",top: "30%"}}>
                        <Form.Label>City, Province, Country</Form.Label>
                        <Form.Control type="username" placeholder="Toronto" size="lg"/>
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword"style={{position: "fixed",left: "50%",top: "40%"}}>
                        <Form.Label>From</Form.Label>
                        <Form.Control type="password" placeholder="01/10/2020" size="lg"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"style={{position: "fixed",left: "50%",top: "50%"}}>
                        <Form.Label>To</Form.Label>
                        <Form.Control type="password" placeholder="01/16/2020"  size="lg"/>
                    </Form.Group>

                    <Button variant="primary" size= "lg" type="submit" style={{position: "fixed",left: "55%",top: "60%"}}>
                    Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

    questionaire3 = () => (
        <div>
            <h1 style={{position: "fixed",left: "30%",top: "15%", fontWeight: "bold"}}>We got it!</h1>
            <h2 style={{position: "fixed",left: "30%",top: "22%", paddingRight: "20%"}}>We are currently using machine learning 
            to match your preferences with a proffessional Tour Guide tailored to your needs and wants, based
            on your availability</h2>
            <img src={refreshSHIT} style= {{position: "fixed", left: "45%", top: "40%"}}/>
        </div>
    )

    loginscreen = () => (
        <div className="signup">
            <img src={girl} style={{ width: "100%" }}/>
            <h1 style={{textAlign: "center", fontFamily: "Comic Sans MS, cursive, sans-serif"}}>LOGIN</h1>
            <h3 style={{textAlign: "center", fontFamily: "Comic Sans MS, cursive, sans-serif"}}>CONTINUE TO AMAZE ME</h3>
            <br />
            <div>
                <Form onSubmit={this.nextScreen}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="fpan25" />
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="*********" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg">
                    Submit
                    </Button>
                </Form>
            </div>
        </div>
    );

<<<<<<< HEAD
    nextScreen = (event) => {
        let nextScreen = ""
        if (this.state.view == "splash")
            nextScreen = "signup"

        else if (this.state.view == "signup")
            nextScreen = "login"

        else if (this.state.view == "signup")
            nextScreen = "touristProfile"
        
        this.setState({view: nextScreen})
        this.header()
        this.body()

    }


=======
>>>>>>> d5dcf78a130cf4664e2b8cc79448639f24703615
    splashScreen = () => (
        <div className="splashBackground">
            {/* <form onSubmit={this.login}> */}
                {/* <h1>Username:</h1>
                <input
                    className='text-input'
                    type="text"
                    name="username"
                    value={this.state.usernameInput}
                    onChange={e => this.setState({usernameInput: e.target.value})}
                /> */}
                

                <input className='button' type="submit" value="Submit"/>
            {/* </form> */}
                        
        </div>
    );

    signupScreen = () => (
        <div className="signup">
            <div>
                <Form onSubmit={this.nextScreen}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" 
                        placeholder="fpan25" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" 
                        placeholder="fpan25@uwo.ca" />
                    </Form.Group>
                
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder="*******" />
                    </Form.Group>

                    <Form.Group controlId="formBasic">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" 
                        placeholder="Fland Pan"/>
                    </Form.Group>

                    <Form.Group controlId="formBasic">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" 
                        placeholder="19"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" 
                        placeholder="London" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Become a Tourist" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Become a Tour Guide" checked= 'true'/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg">
                    Submit
                    </Button>
                </Form>
            </div>
        </div>
    );

    touristProfile = () => (
        <React.Fragment>
        
        <h1 style={{
            fontWeight:700,
            padding: 20
        }}>Tourist Profile</h1>

        <div className="touristProfile">
        <Form>
            <Form.Group>
                <Form.Label>Contact Information</Form.Label>
                <Form.Control type="text" placeholder="Kevin Cheung" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Disabilities/Special Needs</Form.Label>
                <Form.Control type="email" placeholder="admin@kevincheung.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Dream Destination</Form.Label>
                <Form.Control type="password" placeholder="********" />
            </Form.Group>

            <Form.Group controlId="formBasic">
                <Form.Label>Languages</Form.Label>
                <Form.Control type="number" placeholder="19" />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg">
            Continue
            </Button>
        </Form>
        </div>

        </React.Fragment>
    );



    }


export default App;
