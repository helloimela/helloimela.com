import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Portfolio from './Portfolio';
import Footer from './Footer';
import projects from '../assets/data/projects.json';

import './components.scss';

export default class Work extends React.Component {

  renderList(){
    const elems = [];
    projects.items.map((item, index) => {
      elems.push(
        <Portfolio key={'project-' + index}
        className={'project-' + index}
        item={item}/>
      )
    })

    return [...elems]
  }

  render() {
    return (
      <div id='projects' className='full-container work-container'>
        <Container>
          <Row className="align-items-center">
            <Col xs md='12' className='title'>
              <h3 className='display italic'>Selected Projects</h3>
              <p>Here are fun projects that I did both on my professional role and on my free time. Most of other projects are NDA protected.</p>
            </Col>
            {this.renderList()}
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
      </div>
    )
  }
}