import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Portfolio from './Portfolio'

import './components.scss';

function Work() {
  return (
    <div id='projects' className='full-container work-container'>
      <Container>
        <Row className="align-items-center">
          <Col xs md='12' className='title'>
            <h3 className='display italic'>Selected Projects</h3>
          </Col>
          <Portfolio />
          <Portfolio />
        </Row>
      </Container>
    </div>
  );
}

export default Work;
