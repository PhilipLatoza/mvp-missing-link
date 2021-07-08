import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Nav = styled.div`
display: flex;
text-decoration: none;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const NavLink = styled(Link)`
font-family: Avenir Next;
font-size: 20px;
text-decoration: none;
`

function App() {
  return (
    <div>
      <Router>
        <div>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>


          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;