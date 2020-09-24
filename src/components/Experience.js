import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ListCv from './ListCv';
import './components.scss';

function Experience() {
  return (
    <div id='experience' className='full-container experience-container'>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 4 }} className='title'>
            <h3 className='display xl italic'>Experience</h3>
          </Col>
          <ListCv
            year='2018-present'
            title='UI Developer'
            company='Scania - Södertälje, Sweden'
            description='Develop and maintain Scania design system as a frontend developer.'
            keywords='Javascript, StencilJS, Web components, Design system'
          />
          <ListCv 
            year='2018'
            title='Master Thesis Student'
            company='Scania - Södertälje, Sweden'
            description='Visualization of linked data for interoperability tools.'
            keywords='d3.js, Data visualization, Javascript'
          />
          <ListCv 
            year='2017'
            title='UX Research Summer Intern'
            company='Ericsson - Stockholm, Sweden'
            description='Conduct a user research for internal system in the test area.'
            keywords='UX Research, Persona, User interview, Usability testing'
          />
          <ListCv 
            year='2013-2016'
            title='Frontend Developer'
            company='Varnion Technology Semesta - Bandung, Indonesia'
            description='Collaborate with designer and backend developers and implement solution as a web application.'
            keywords='Javascript, Angular, HTML, SASS Compass'
          />
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
