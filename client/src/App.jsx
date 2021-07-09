import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';
import {CSSTransition} from 'react-transition-group';

const Nav = styled.div`
display: flex;
text-decoration: none;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #1c1b1b;
height: 4vh;
padding-right: 1px;
margin-left: -10%;
margin-right: -8%;
`;

const NavLink = styled(Link)`
font-family: Avenir Next;
font-size: 20px;
margin-left: 2%;
text-decoration: none;
color: white;
NavLink:visited {
  color: white;
}
&:hover ${NavLink} {
  color: #C50000;
  border: none;
}
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(message) {
    axios.post('/message', message)
    .then((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
      <Router>
        <div>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact newMessage={this.newMessage}/>
            </Route>
          </Switch>

        </div>
      </Router>
      <Footer />
      </div>
    )
  }
}

export default App;



