import React, { Component } from 'react';
import './App.css';
import Map from './components/map'
// import FirstComponent from "./components/firstComponent"
// import About from './components/about'
// import Navibar from './components/navbar'
import Logo from './assets/MAP.PNG';
import girl from './assets/GIRL.PNG';
import travelGuy from './assets/BACKGROUNDDD.PNG';
import refreshSHIT from './assets/RefreshShit.png';
import { Form, Button, Col , CardGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import splashBackground from './assets/Capture.PNG'
import Leanne from './assets/Leanne.png';
import Kevin from './assets/Keven.jpg';
import profile from './assets/PROFILE-PIC.PNG'
import Jason from './assets/Jason.png';
import Alvina from './assets/Alvina.png';



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
        const {view} = this.state;
        if (view == "splash")
            return this.splashScreen();

        else if (view == 'signup')
            return this.signupScreen();
        if (view === 'viewing')
            return this.browsingTweetsScreen();
        else if (view === 'tweeting')
            return this.sendTweetScreen();
        else if (view === 'login')
            return this.loginscreen();

        else if (view == 'questionnaire2')
            return this.questionnaire2();
        
        else if (view == 'touristProfile')
            return this.touristProfile();

        else if (view == "survey")
            return this.surveyScreen();

        else if (view == 'questionnaire3')
            return this.questionnaire3();

        else if (view == "questionnaire1")
            return this.questionnaire1();
        else if (view === 'finalScreen')
            return this.finalScreen();
        
    };

    finalScreen = () => (
        <def style={{position: "fixed",left: "5%",top: "15%"}}>
            <h1 fontWeight= "bold">Booking Confirmed</h1>
            <h1 style={{position: "fixed",left: "5%",top: "25%", fontWeight: "bold"}}>What's Next?</h1>
            <h2 style={{position: "fixed",left: "5%",top: "30%"}}>Just sit back and be amazed by <b>Leanne</b>'s personalized tour!</h2>

        </def>
    )

    tourGuideSelection = () => (
        <def>
            <h1 fontWeight= "bold" style= {{position: "fixed",left: "20%",top: "15%", fontWeight: "bold"}}>Based on your preferences, we found...</h1>
            <CardGroup style= {{position: "fixed",top: "25%"}}>
                <Card>
                    <Card.Body>
                    <Card.Title><center><b>Leanne Li</b></center></Card.Title>
                    <Card.Text>
                    <b>Location: </b>Toronto, Ontario, Canada<br></br>
                    <b>Languages:</b> English (fluent), Mandarin (intermediate) <br></br>
                    <b>Biography:</b> Leanne is a member of the Canadian Tour Guide Association since 2017, 
                    and she has experience working with people with intellectually disabled people 
                    ranging from age 6 to 30 with trainings provided by Best Buddies. Welcome to Toronto!!! <br></br>
                    <b>Credentials:</b> Extensive work experience in Toronto, Mississauga, and other cities within the GTA area.
                    </Card.Text>
                    <Button style= {{position: "fixed", left: "2%", top: "64%", opacity: '0', height: "250px", width: "344px"}}></Button>
                    <Card.Img variant='bottom' src={Leanne} sizes='100px160'/>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title><center><b>Kevin Cheung</b></center></Card.Title>
                    <Card.Text>
                    <b>Location: </b>Toronto, Ontario, Canada<br></br>
                    <b>Languages:</b> English (fluent), Cantonese (intermediate) <br></br>
                    <b>Biography:</b> Keven is a university student who works at Global 
                    Local part-time. He has experience touring around the University of 
                    Toronto and surrounding areas. <br></br>
                    <b>Credentials:</b> Professionally trained by Best Buddies and received best touring beginner of the year
                    </Card.Text>
                    <Button style= {{position: "fixed", left: "27%", top: "64%", opacity: '0', height: "260px", width: "344px"}}></Button>
                    <Card.Img variant="top" src= {Kevin} />
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Body>
                    <Card.Title><center><b>Jason Kim</b></center></Card.Title>
                    <Card.Text>
                    <b>Location: </b>Bowmanville, Ontario, Canada<br></br>
                    <b>Languages:</b> English (fluent), Korean (fluent) <br></br>
                    <b>Biography:</b> Jason is a full-time doctor that works with 
                    disabled people ranging from 18-30. He is also heavily invoeld in 
                    community volunteers and work at Global Local part-time. <br></br>
                    <b>Credentials:</b> Professionally trained by Best Buddies and received top 10 Tour Guide of 2019.
                    </Card.Text>
                    <Button style= {{position: "fixed", left: "52%", top: "64%", opacity: '0', height: "260px", width: "344px"}}></Button>
                    <Card.Img variant="top" src= {Jason} />
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Body>
                    <Card.Title><center><b>Alvina Lin</b></center></Card.Title>
                    <Card.Text>
                    <b>Location: </b>Markham, Ontario, Canada<br></br>
                    <b>Languages:</b> English (fluent), Mandarin (fluent), Cantonese (fluent) <br></br>
                    <b>Biography:</b> Alvina has volunteered with mentally disabled students for 2 years
                     with over 600 hours of experience. She is a geography student that LOVES tourism, 
                     and she will be a great fit if you want an educational trip. <br></br>
                    <b>Credentials:</b> Professionally trained by Best Buddies and received BEST Tour Guide.
                    </Card.Text>
                    <Button style= {{position: "fixed", left: "78%", top: "66%", opacity: '0', height: "240px", width: "344px"}}></Button>
                    <Card.Img variant="top" src= {Alvina} />
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </def>
    );

    nextScreen = (event) => {
        let nextScreen = ""
        if (this.state.view == "splash")
            nextScreen = "signup"

        else if (this.state.view == "signup")
            nextScreen = "login"

        else if (this.state.view == "login")
            nextScreen = "touristProfile"

        else if (this.state.view == "touristProfile")
            nextScreen = "questionnaire1"

        else if (this.state.view == "questionnaire1")
            nextScreen = "questionnaire2"

        else if (this.state.view == "questionnaire2")
            nextScreen = "questionnaire3"
        
        this.setState({view: nextScreen})
        this.header()
        this.body()

    }

    questionnaire2 = () => (
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

                    <br></br>
                    <Button variant="primary" size= "lg" type="submit" style={{position: "fixed",left: "55%",top: "60%"}} onSubmit={this.nextScreen}>
                    Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

    questionnaire3 = () => (
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
            <h1 style={{textAlign: "center", fontFamily: "Open Sans"}}>LOGIN</h1>
            <h3 style={{textAlign: "center", fontFamily: "Open Sans"}}>CONTINUE TO AMAZE ME</h3>
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


    splashScreen = () => (
        <div className="splashBackground">
            <Map />
            <br></br>
            <Form onSubmit={this.nextScreen}>
                <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg" style={{position: "fixed",left: "55%",top: "60%"}}>Continue</Button>
            </Form>   
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

    questionnaire1 = () => (
        <div className="survey">
            <h1 style={{ textAlign: "center" }}>Who Are You?</h1>
            <h5 style={{ textAlign: "center" }}>We will match you with a professional guide tailor to your wants</h5><br />
            <form action="/action_page.php" >
                <p style={{ textAlign: "center" }}>Outdoor or Indoor</p>
                <input type="radio" name="outdoor" value="male" /> 1
                <input type="radio" name="outdoor" value="female" /> 2
                <input type="radio" name="outdoor" value="other" /> 3
                <input type="radio" name="outdoor" value="other" /> 4
                <input type="radio" name="outdoor" value="other" /> 5
                <p></p>
                
                <p style={{ textAlign: "center" }}>Urban or Rural</p>
                <input type="radio" name="outdoor" value="male" /> 1
                <input type="radio" name="outdoor" value="female" /> 2
                <input type="radio" name="outdoor" value="other" /> 3
                <input type="radio" name="outdoor" value="other" /> 4
                <input type="radio" name="outdoor" value="other" /> 5
                <p></p>

                <p style={{ textAlign: "center" }}>Nature or Technology</p>
                <input type="radio" name="outdoor" value="male" /> 1
                <input type="radio" name="outdoor" value="female" /> 2
                <input type="radio" name="outdoor" value="other" /> 3
                <input type="radio" name="outdoor" value="other" /> 4
                <input type="radio" name="outdoor" value="other" /> 5
                <p></p>

                <p style={{ textAlign: "center" }}>Food or Shopping</p>
                <input type="radio" name="outdoor" value="male" /> 1
                <input type="radio" name="outdoor" value="female" /> 2
                <input type="radio" name="outdoor" value="other" /> 3
                <input type="radio" name="outdoor" value="other" /> 4
                <input type="radio" name="outdoor" value="other" /> 5
                <p></p>

                <p style={{ textAlign: "center" }}>Extrovert or Introvert</p>
                <input type="radio" name="outdoor" value="male" /> 1
                <input type="radio" name="outdoor" value="female" /> 2
                <input type="radio" name="outdoor" value="other" /> 3
                <input type="radio" name="outdoor" value="other" /> 4
                <input type="radio" name="outdoor" value="other" /> 5
                <p></p>
                
                <br></br>
                <Form onSubmit={this.nextScreen}>
                    <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg">Continue</Button>
                </Form>
            </form>
        </div>
    );

    touristProfile = () => (
        <React.Fragment>
        
        <h1 style={{
            fontWeight:700,
            padding: 20
        }}>Tourist Profile</h1>

        <div className= 'profile-pic'>
            <img src={profile}/>
        </div>

        <div className="touristProfile">
            <h2>Contact Information</h2>
            <h3 style={{
                color: "gray"
            }}>Fland Pan</h3>
            <br></br>
            <h2>Disabilities/Special Needs</h2>
            <h3 style = {{
                color: "gray"
            }}>None</h3>
            <br></br>
            <h2>Dream Destination</h2>
            <h3 style = {{
                color: "gray"
            }}>Toronto</h3>
            <br></br>
            <h2>Language(s)</h2>
            <h3 style = {{
                color: "gray"
            }}>English, Chinese</h3>

            <br></br>
            <Form onSubmit={this.nextScreen}>
                <Button variant="primary" type="submit" className="btn-block mr-1 mt-1 btn-lg">Continue</Button>
            </Form>
        </div>
       


        </React.Fragment>
    );
        }
export default App;
