import React from 'react';
import { Nav } from 'react-bootstrap';

import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';
import Profile from './components/Profile';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.experience = React.createRef();
    this.work = React.createRef();
    
    this.state = {
      currentPage : ''
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener = () => {
    const experience = this.experience.current.offsetTop;
    const work = this.work.current.offsetTop;
    const headerHeight = 57;

    if(window.pageYOffset >= 0 && window.pageYOffset < (experience - headerHeight)) {
      this.setState({currentPage : 'about'})
    } else if(window.pageYOffset >= (experience - headerHeight) && window.pageYOffset < (work - headerHeight)) {
      this.setState({currentPage : 'experience'})
    } else {
      this.setState({currentPage : 'work'}) 
    }
  }

  getNavMenu = () => {
    return (
      <Nav className = {this.state.currentPage}>
        <Profile />
        <Nav.Item>
          <Nav.Link href="#about" active={this.state.currentPage === 'about'}>About</Nav.Link>
          <Nav.Link href="#experience" active={this.state.currentPage === 'experience'}>Experience</Nav.Link>
          <Nav.Link href="#projects" active={this.state.currentPage === 'work'}>Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className='wrapper'>
          <Home/>
        </div>
        <div className='wrapper' ref={this.experience}>
          <Experience/>
        </div>
        <div className='wrapper' ref={this.work}>
          <Work ref={this.work}/>
        </div>
        {this.getNavMenu()}
      </React.Fragment>
    )
  }
};
