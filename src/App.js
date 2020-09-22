import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import {Nav} from 'react-bootstrap';

import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';

import './App.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    console.log(number)
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getNavMenu = () => {
    return (
      <Nav onSelect={this.handlePageChange}>
        <Nav.Item>
          <Nav.Link eventKey="0">About</Nav.Link>
          <Nav.Link eventKey="1">Experience</Nav.Link>
          <Nav.Link eventKey="2">Work</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

  render() {
    return (
      <React.Fragment>
        <ReactPageScroller 
        pageOnChange={this.handlePageChange}
        customPageNumber={this.state.currentPage}>
          <Home />
          <Experience />
          <Work />
        </ReactPageScroller>
        {this.getNavMenu()}
      </React.Fragment>
    )
  }
};
