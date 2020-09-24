import React from 'react';
import { Nav } from 'react-bootstrap';

import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';
import Profile from './components/Profile';

import './App.scss';

export default class App extends React.Component {

  getNavMenu = () => {
    return (
      <Nav>
        <Profile />
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

  render() {
    return (
      <React.Fragment>
          <Home />
          <Experience />
          <Work />
        {this.getNavMenu()}
      </React.Fragment>
    )
  }
};
